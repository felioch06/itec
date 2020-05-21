<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src='https://www.google.com/recaptcha/api.js'></script>
    <title>Sign Up</title>

    <!-- Prevent the demo from appearing in search engines -->
    <meta name="robots" content="noindex">

    <!-- Perfect Scrollbar -->
    <link type="text/css" href="assets/vendor/perfect-scrollbar.css" rel="stylesheet">

    <!-- Fix Footer CSS -->
    <link type="text/css" href="assets/vendor/fix-footer.css" rel="stylesheet">

    <!-- Material Design Icons -->
    <link type="text/css" href="assets/css/material-icons.css" rel="stylesheet">
    <link type="text/css" href="assets/css/material-icons.rtl.css" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link type="text/css" href="assets/css/fontawesome.css" rel="stylesheet">
    <link type="text/css" href="assets/css/fontawesome.rtl.css" rel="stylesheet">

    <!-- Preloader -->
    <link type="text/css" href="assets/css/preloader.css" rel="stylesheet">
    <link type="text/css" href="assets/css/preloader.rtl.css" rel="stylesheet">

    <!-- App CSS -->
    <link type="text/css" href="assets/css/app.css" rel="stylesheet">
    <link type="text/css" href="assets/css/app.rtl.css" rel="stylesheet">





</head>

<body class="layout-navbar-mini-fixed-bottom">
    <div class="preloader">
        <div class="sk-double-bounce">
            <div class="sk-child sk-double-bounce1"></div>
            <div class="sk-child sk-double-bounce2"></div>
        </div>
    </div>

    <!-- Header Layout -->
    <div class="mdk-header-layout js-mdk-header-layout">

        <!-- Header -->

        <div id="header" class="mdk-header bg-dark js-mdk-header mb-0" data-effects="waterfall blend-background" data-fixed data-condenses>
            <div class="mdk-header__content">

                <div data-primary class="navbar navbar-expand-sm navbar-dark bg-dark p-0" id="default-navbar">
                    <div class="container">

                        <!-- Navbar Brand -->
                        <a href="index.html" class="navbar-brand">
                            <img class="navbar-brand-icon" src="assets/images/logo/white-100@2x.png" width="30" alt="Tutorio">
                            <span class="d-none d-md-block">ITEC</span>
                        </a>

                        <!-- Main Navigation -->
                        <ul class="nav navbar-nav ml-auto d-none d-sm-flex">
                            <li class="nav-item active">
                                <a href="signup.html" class="nav-link">Signup</a>
                            </li>
                            
                        </ul>
                        <!-- // END Main Navigation -->

                        <!-- Navbar toggler -->
                        <button class="navbar-toggler navbar-toggler-right d-block d-md-none" type="button" data-toggle="sidebar">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                    </div>
                </div>

            </div>
        </div>

        <!-- // END Header -->

        <!-- Header Layout Content -->
        <div class="mdk-header-layout__content page-content pb-0">


            <div class="py-64pt bg-gradient-primary">
                <div class="container d-flex flex-column flex-md-row align-items-center text-center text-md-left">
                    <img src="assets/images/illustration/student/128/white.svg" class="mr-md-32pt mb-32pt mb-md-0" alt="student">
                    <div class="flex mb-32pt mb-md-0">
                        <h1 class="text-white mb-8pt">Sign Up</h1>
                        <p class="lead measure-lead text-white-50">Change your future today with over 1.000 professional courses from the top industry leading teachers and professionals.</p>
                    </div>
                    <a href="" class="btn btn-outline-white flex-column">
                        Eres Instructor
                        <span class="btn__secondary-text">Inscribir Aqui</span>
                    </a>
                </div>
            </div>
            

            <div class="bg-white py-32pt py-lg-64pt">
                <div class="container page__container">
                    <div class="col-lg-10 p-0 mx-auto">
                        <div class="row">
                            <div class="col-md-6 mb-24pt mb-md-0">

                                <?php if(isset($_REQUEST['rg'])){ ?>
                                <div class="alert alert-success">
                                    !Usuario Registrado Correctamente¡
                                </div>
                                <?php } ?>

                                <?php if(isset($_REQUEST['emr'])){ ?>
                                <div class="alert alert-danger">
                                    !El correo o el nombre de usuario ya existen, por favor seleccione otro¡
                                </div>
                                <?php } ?>

                                <?php if(isset($_REQUEST['psr'])){ ?>
                                <div class="alert alert-danger">
                                    !Las contraseñas no coinciden¡
                                </div>
                                <?php } ?>


                                <form action="?class=Home&view=register" method="post">
                                    <div class="form-group">
                                        <label for="name">Nombre Completo</label>
                                        <input id="name" type="text" name="name" class="form-control" placeholder="" required>
                                    </div>
                                     <div class="form-group">
                                        <label for="name">Nombre de Usuario</label>
                                        <input id="name" type="text" name="user_name" class="form-control" placeholder="" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Correo Electronico</label>
                                        <input id="email" type="email" name="email" class="form-control" placeholder="" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Numero Telefonico</label>
                                        <input id="email" type="number" name="phone_number" class="form-control" placeholder="" required>
                                    </div>
                                    <div class="form-group mb-24pt">
                                        <label for="password">Contraseña</label>
                                        <input id="password" type="password" name="password" class="form-control" placeholder="" required>
                                    </div>
                                    <div class="form-group mb-24pt">
                                        <label for="password">Repetir contraseña</label>
                                        <input id="password" type="password" name="password_security" class="form-control" placeholder="" required>
                                    </div>
                                    <!--  Captcha 2.0
                                        
                                        <div class="form-group mb-24pt">
                                            <div class="g-recaptcha" data-sitekey="6Ld1P_oUAAAAAOO-8xlcjK6PPiX55SIHbthyTIZT"></div>                                        
                                        </div> 
                                    -->
                                    
                                    <!-- Input oculto con el rol estudiante/profesor estudid -->
                                    <input type="hidden" name="fk_rol" value="1">

                                    
                                    <div class="text-center"><button class="btn btn-lg btn-primary">Crear Cuenta</button></div>
                                </form>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-0">
                                    <div class="card-body">
                                        <h5>Purchase summary</h5>
                                        
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" checked id="topic-all">
                                            <label class="custom-control-label">Terms and conditions</label>
                                            <small class="form-text text-muted">By checking here and continuing, I agree to the Tutorio Terms of Use</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page-separator m-0">
                <div class="page-separator__text">Ingresar</div>
                <div class="page-separator__bg-top bg-white"></div>
            </div>
            <div class="bg-body pt-32pt pb-32pt pb-md-64pt text-center">
                <div class="container page__container">
                    <a href="signup-payment.html" class="btn btn-lg btn-secondary btn-block-xs">Facebook</a>
                    <a href="signup-payment.html" class="btn btn-lg btn-secondary btn-block-xs">Google+</a>
                </div>
            </div>




            <div class="js-fix-footer bg-white border-top-2">
                <div class="container page-section py-lg-48pt">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-6 col-md-4 mb-24pt mb-md-0">
                                    <h4 class="text-70">Learn</h4>
                                    <nav class="nav nav-links nav--flush flex-column">
                                        <a class="nav-link" href="library.html">Library</a>
                                        <a class="nav-link" href="library-featured.html">Featured</a>
                                        <a class="nav-link" href="library-filters.html">Explore</a>
                                        <a class="nav-link" href="paths.html">Learning Paths</a>
                                    </nav>
                                </div>
                                <div class="col-6 col-md-4 mb-24pt mb-md-0">
                                    <h4 class="text-70">Join us</h4>
                                    <nav class="nav nav-links nav--flush flex-column">
                                        <a class="nav-link" href="pricing.html">Pricing</a>
                                        <a class="nav-link" href="login.html">Login</a>
                                        <a class="nav-link" href="signup.html">Sign Up</a>
                                        <a class="nav-link" href="signup-payment.html">Payment</a>
                                    </nav>
                                </div>
                                <div class="col-6 col-md-4 mb-32pt mb-md-0">
                                    <h4 class="text-70">Community</h4>
                                    <nav class="nav nav-links nav--flush flex-column">
                                        <a class="nav-link" href="student-discussions.html">Discussions</a>
                                        <a class="nav-link" href="student-discussions-ask.html">Ask Question</a>
                                        <a class="nav-link" href="student-profile.html">Student Profile</a>
                                        <a class="nav-link" href="instructor-profile.html">Instructor Profile</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-md-right">
                            <p class="text-70 brand justify-content-md-end">
                                <img class="brand-icon" src="assets/images/logo/black-70@2x.png" width="30" alt="Tutorio"> Tutorio
                            </p>
                            <p class="text-muted mb-0 mb-lg-16pt">Tutorio is an online learning platform that helps anyone achieve their personal and professional goals.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-footer page-section py-lg-0pt">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-2 col-sm-4 mb-0pt mb-md-0">
                                <p class="text-white-70 mb-8pt"><strong>Follow us</strong></p>
                                <nav class="nav nav-links nav--flush">
                                    <a href="#" class="nav-link mr-8pt"><img src="assets/images/icon/footer/facebook-square@2x.png" width="24" height="24" alt="Facebook"></a>
                                    <a href="#" class="nav-link mr-8pt"><img src="assets/images/icon/footer/twitter-square@2x.png" width="24" height="24" alt="Twitter"></a>
                                    <a href="#" class="nav-link mr-8pt"><img src="assets/images/icon/footer/vimeo-square@2x.png" width="24" height="24" alt="Vimeo"></a>
                                    <a href="#" class="nav-link"><img src="assets/images/icon/footer/youtube-square@2x.png" width="24" height="24" alt="YouTube"></a>
                                </nav>
                            </div>
                            <div class="col-md-6 col-sm-4 mb-24pt mb-md-0 d-flex align-items-center">
                                <a href="" class="btn btn-outline-white">English <span class="icon--right material-icons">arrow_drop_down</span></a>
                            </div>
                            <div class="col-md-4 text-md-right">
                                <p class="mb-8pt d-flex align-items-md-center justify-content-md-end">
                                    <a href="" class="text-white-70 text-underline mr-16pt">Terms</a>
                                    <a href="" class="text-white-70 text-underline">Privacy policy</a>
                                </p>
                                <p class="text-white-50 mb-0">Copyright 2019 &copy; All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- // END Header Layout Content -->

    </div>
    <!-- // END Header Layout -->

   
   

                           
                                    

    <!-- jQuery -->
    <script src="assets/vendor/jquery.min.js"></script>

    <!-- Bootstrap -->
    <script src="assets/vendor/popper.min.js"></script>
    <script src="assets/vendor/bootstrap.min.js"></script>

    <!-- Perfect Scrollbar -->
    <script src="assets/vendor/perfect-scrollbar.min.js"></script>

    <!-- DOM Factory -->
    <script src="assets/vendor/dom-factory.js"></script>

    <!-- MDK -->
    <script src="assets/vendor/material-design-kit.js"></script>

    <!-- Fix Footer -->
    <script src="assets/vendor/fix-footer.js"></script>

    <!-- Chart.js -->
    <script src="assets/vendor/Chart.min.js"></script>

    <!-- App JS -->
    <script src="assets/js/app.js"></script>

    <!-- Highlight.js -->
    <script src="assets/js/hljs.js"></script>

    <!-- App Settings (safe to remove) -->
    <script src="assets/js/app-settings.js"></script>




</body>

</html>