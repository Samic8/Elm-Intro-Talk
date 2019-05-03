import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Set exposing (Set)

main =
  Browser.sandbox { init = init, update = update, view = view }

type alias Model = 
  { fruits: List String
  , selected: Set String
  }

init =
  { fruits = ["apple", "bannana", "kiwi", "pear", "mango", "grapes"]
  , selected = Set.empty
  }

type Msg = CheckboxChanged String Bool

update : Msg -> Model -> Model
update msg model =
  case msg of
    CheckboxChanged fruit isChecked ->
      if isChecked then
        { model | selected = Set.insert fruit model.selected }
      else
        { model | selected = Set.remove fruit model.selected }

view : Model -> Html Msg
view model =
  ul []
    (List.map (\fruit -> li [] [
      span [] [text fruit]
      , input [ type_ "checkbox"
              , onCheck (fruit |> CheckboxChanged)
              , checked (model.selected |> Set.member fruit)
              ] []
    ]
    ) model.fruits)