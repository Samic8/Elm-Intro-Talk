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

type Msg = Increment | Decrement

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment ->
      model

    Decrement ->
      model

view : Model -> Html Msg
view model =
  ul []
    (List.map (\fruit -> li [] [
      span [] [text fruit]
      , input [ type_ "checkbox", onInput Increment] []
    ]
    ) model.fruits)