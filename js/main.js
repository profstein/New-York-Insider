<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="main.css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|News+Cycle|Caveat" rel="stylesheet">
    <title>Explore New York</title>
</head>
<body>
   <main>
    <header class="header">
        <h1 class="logo"><a href="home.html">Explore New York</a></h1> <a id="menu-icon">&#9776; Menu</a>
        <nav class="navbar">
            <ul class="menu">
                <li><a class= "active" href="#">Home</a></li>
                <li><a href="place.html">Guggenheim</a></li>
                <li><a href="#">MET</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
    </header>
    <div class="title">
    <h1>Explore New York</h1>
        <h2>Here are a couple reccomendations for travelers in New York, <br>from Cammy and Vukan.</h2></div>

   <article class="homeGrid">
    <div class="cammy">
 <img src="img/IMG_20170410_133529_869.jpg" alt="Guggenheim" >
</div> <!-- end of carousel -->
    <div class="cammytext">
        <h2><a href="place.html">
            Solomon R. Guggenheim Museum</a>
        </h2>
        <p>Cammy's favorite spot in the city is the Guggenheim Museum, which is located in Upper East Side.  </p>
    </div>


        <div class="vukantext">
        <h2> <a href="">
            Metropolitan Museum of Art</a>
        </h2>
        <p>Vukan's favorite spot in the city is the Metropolitan Museum of Art, which is also located in Upper East Side, walking distance from the Guggenheim Museum.  </p>
    </div>
    <div class="vukan">
       <img src="img/img_1500_720.jpg" alt="Met" >
    </div> <!-- end of thumbnail -->


    </article>

    <footer>
              <div class="author">
            <h2>Cammy Wan</h2>
            <p>2017</p>
        </div> <!-- end of author-->
    </footer> <!-- end of footer -->
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function () {
            $('#menu-icon').on('click', function () {
                $('.navbar').toggleClass('expand');
                return false;
            });
        });
    </script>
</body>
</html>
