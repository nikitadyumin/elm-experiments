port module Test1 exposing (foo)

import Html exposing (..)
import Html.Events exposing (onClick)
import Html.App as App


foo x =
    x

type Action =
    Effect

update action model =
    case action of
        Effect ->
            432

model =
    1

view model =
    div [] [
        text (toString model),
        button [ onClick  Effect] [
            text "13"
        ]
    ]



main = App.beginnerProgram {model = model, view = view, update = update}