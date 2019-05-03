import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Set exposing (Set)

main =
  Browser.sandbox { init = init, update = update, view = view }

-- Init

type alias Model = 
  { fruits: List String
  , selected: Set String
  }

init =
  { fruits = ["apple", "bannana", "kiwi", "pear", "mango", "grapes"]
  , selected = Set.empty
  }

-- Update

type Msg = CheckboxChanged String Bool

update : Msg -> Model -> Model
update msg model =
  case msg of
    CheckboxChanged fruit isChecked ->
      if isChecked then
        { model | selected = Set.insert fruit model.selected }
      else
        { model | selected = Set.remove fruit model.selected }

-- View

view : Model -> Html Msg
view model =
  ul []
    (model |> viewFruitChecklist)

viewFruitChecklist : Model -> List (Html Msg)
viewFruitChecklist model =
  List.map (\fruit -> li [] [
      span [] [text fruit]
      , input [ type_ "checkbox"
              , onCheck (fruit |> CheckboxChanged)
              , checked (model.selected |> Set.member fruit)
              ] []
    ]) model.fruits