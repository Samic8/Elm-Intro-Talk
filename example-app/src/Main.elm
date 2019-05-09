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

type Msg = CheckboxChanged String Bool | FruitDeleted String

update : Msg -> Model -> Model
update msg model =
  case msg of
    CheckboxChanged fruit isChecked ->
      if isChecked then
        { model | selected = Set.insert fruit model.selected }
      else
        { model | selected = Set.remove fruit model.selected }
    FruitDeleted fruit ->
      { model | fruits = model.fruits |> List.filter (\stockedFruit -> stockedFruit /= fruit ) }

-- View

view : Model -> Html Msg
view model =
  ul []
    (model.fruits |> List.map (\fruit ->
      li [] [
        span [] [ text fruit ]
        , input [ type_ "checkbox"
                , onCheck (CheckboxChanged fruit)
                , checked (Set.member fruit model.selected)
                ] []
        , span [ onClick (FruitDeleted fruit) ] [ text "x"]
    ]))