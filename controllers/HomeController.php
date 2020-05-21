<?php
    class HomeController extends Home{

        private $Security;
        //constructor

        public function __construct(){
            try{
                $this->security = new Security();
            }catch(Exception $e){
                die($e->getMessage());
            }
        }

        // Vistas

        public function home(){
            require_once("views/user/signup.php");
        }

        public function signin(){
            require_once("views/user/signup.php");
        }
        
        public function signUp(){
            require_once("views/user/signup.php");
        }

        // Logica

        public function login(){
            
        }
        
        public function register(){

            //Capturando información del usuario y restringiendo caracteres
            $name = $this->security->string($_POST['name']);
            $user_name = $this->security->string($_POST['user_name']);
            $email = $this->security->email($_POST['email']);
            $password = $_POST['password'];
            $password_security = $_POST['password_security'];
            $phone_number = $this->security->int($_POST['phone_number']);
            $fk_rol = $_POST['fk_rol'];

            //verificando que las contraseñas coincidan
            if($password === $password_security){

                //verificar Email y UserName
                $verify = parent::verify($email, $user_name);

                $token = $this->security->tokenUrl();

                if(@$verify->email == $email || @$verify->user_name == $user_name){
                    header('location:?class=Home&view=signup&emr='.$token);
                }else{
                    
                    $password = $this->security->encrypt($password);

                    parent::stored($name, $user_name, $email, $password, $phone_number, $token, $fk_rol);

                    $user = parent::searchUserForEmail($email);
                    //echo "verifica tu correo con este link: https://www.prueba.com/?class=verificar&view=verficado&token_verificado=".$user->token_verificado;
                    mail($email, "Itec, verifica tu correo electrónico", "verifica tu correo con este link: https://www.prueba.com/?class=verificar&view=verficado&token_verificado=".$user->token_verificado);
                    header('location:?class=Home&view=signup&rg='.$token);                    
                }
                // fin de verificar Email y UserName


            }else{
                header('location:?class=Home&view=signup&psr='.$token);            
            }

            //fin de verificando que las contraseñas coincidan

        }

        public function verifyEmailMail(){
            $token = $_REQUEST['token_verificado'];
            parent::verifiedEmail($token);
            echo "correcto";
            //header('location:?class=Home&view=signin);                    

        }
    }
?>