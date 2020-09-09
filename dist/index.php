<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Todo</title>
    </head>
    <body>
      <div style="display:flex;">
        <div>
          <div class="mainDiv">
            <div id="root">
                <!--Render App.js from React-->
            </div>
            <div>
                <h4>Voici 5 pokemons:</h4>
                <div id="pokemons">
                    <!--Render PokemonList.js from React-->
                </div>
            </div>
            </div>
          </div>
          <div class="mainDiv">
            <h4>Liste de tâches:</h4>
            <form>
              <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" >
                  Qu'est ce qui a besoin d'être fait?
                </label>
              </h2>
              <input type="text" name="text" autoComplete="off" />
              <button type="submit">
                Ajouter une tâche
              </button>
            </form>

            <div id="ToDoList">

              <?php
                /*
                require_once '../src/php/bdd/MyPDO.php';
                $bdd = new MyPDO();
                $data = $bdd->query("SELECT * FROM Task")->fetchAll();
                var_dump($data);
                  */
                // and somewhere later:
                /*foreach ($data as $row) {
                    echo $row['name']."<br />\n";
                }*/
                ?>

              <!--Render ToDoList.js from React-->
            </div>
          </div>

          
        
        </div>

        <script src="./bundle.min.js"></script>
    </body>
</html>