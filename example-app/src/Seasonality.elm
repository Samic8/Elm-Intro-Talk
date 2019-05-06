import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Set exposing (Set)

main =
  Browser.sandbox { init = init, update = update, view = view }

-- Init

type Season = Winter | Summer

type alias Model = 
  { fruits: List String
  , selected: Set String
  , currentSeason: Season
  }

init =
  { fruits = ["apple", "bannana", "kiwi", "pear", "mango", "grapes"]
  , selected = Set.empty
  , currentSeason = Winter
  }

-- Update

type Msg = CheckboxChanged String Bool
           | SeasonChanged Season

update : Msg -> Model -> Model
update msg model =
  case msg of
    CheckboxChanged fruit isChecked ->
      if isChecked then
        { model | selected = Set.insert fruit model.selected }
      else
        { model | selected = Set.remove fruit model.selected }
    SeasonChanged season ->
        { model | currentSeason = season }

-- View

view : Model -> Html Msg
view model =
  div [] 
    [ div [] [ viewSeasonButton Winter "Winter", viewSeasonButton Summer "Summer" ]
    , ul [] (model |> viewFruitChecklist)
    ]

viewFruitChecklist : Model -> List (Html Msg)
viewFruitChecklist model =
  model.fruits |> (filterOutFruitsOutOfSeason model.currentSeason) |> List.map (\fruit -> li [] [
      span [] [text fruit]
      , input [ type_ "checkbox"
              , onCheck (fruit |> CheckboxChanged)
              , checked (model.selected |> Set.member fruit)
              ] []
    ])

viewSeasonButton : Season -> String -> Html Msg
viewSeasonButton season displayText =
    button [ onClick (SeasonChanged season)] [ text displayText ]

-- Season Utilities

filterOutFruitsOutOfSeason : Season -> List String -> List String
filterOutFruitsOutOfSeason currentSeason fruits =
  List.filter (\fruit -> List.member fruit (currentSeason |> getFruitsForSeason)) fruits

getFruitsForSeason : Season -> List String
getFruitsForSeason season =
    case season of
        Winter ->
            ["apple", "kiwi", "grapes"]

        Summer ->
            ["bannana", "mango", "pear"]