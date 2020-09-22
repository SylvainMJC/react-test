
<?php include_once "./header.php" ?>


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
            <div class="mtg">
              <a class="btn btn-success" href="./mtgDeckBuilder.php">MTG deck builder</a>
            </div>
          </div>
          
        </div>
        <div class="mainDiv">
          <h1 class="text-center"> To-Do List: </h1>
          <div id="ToDoList">
  
          </div>
        </div>

      </div> 

      <!-- SCRIPTS  -->
      <script src="./index.min.js"></script>
<?php include_once "./footer.php"; ?>