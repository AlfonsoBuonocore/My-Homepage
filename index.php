<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            *{
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body{
                display: flex;
                min-height: 100vh;
                justify-content: center;
                align-items: center;
            }
            table{
                border: 2px solid black;
            }
            td{
                border: 2px dotted red;
                width: 50px;
                height: 50px;
            }

        </style>
    </head>
    <body>
        <table>
            <?php
                for($i = 0; $i < 8; $i++){
                    echo "<tr>";
                    for ($j = 0; $j < 8; $j++) { 
                        if (($j%2) == 1){
                            echo "<td style='background-color: black;' ></td>";
                        }else{
                            echo "<td style='background-color: white;' ></td>";
                        }
                    }
                    echo "</tr>";
                }
            ?>
        </table>
    </body>
</html>