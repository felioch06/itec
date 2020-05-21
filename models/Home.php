<?php
    class Home extends DB{

        //user
        public function searchUserForEmail($email){
            try{
                $str = parent::conectar()->prepare("SELECT * FROM users WHERE email = ?");
                $str->bindParam(1,$email,PDO::PARAM_STR);
                $str->execute();
                return $str->fetch(PDO::FETCH_OBJ);
            }catch(Exception $e){
                die('mal aqui'.$e->getMessage());
            }
        }

        //Login
        public function verifyEmail($email, $password){
            try{
                $str = parent::conectar()->prepare("SELECT email, password FROM users WHERE email = ? AND password = ? ");
                $str->bindParam(1,$email,PDO::PARAM_STR);
                $str->bindParam(2,$password,PDO::PARAM_STR);
                $str->execute();
                return $str->fetch(PDO::FETCH_OBJ);
            }catch(Exception $e){
                die('mal'.$e->getMessage());
            }
        }

    
        //Register
        public function verify($email, $user_name){
            try{
                $str = parent::conectar()->prepare("SELECT * FROM users WHERE email = ? OR user_name = ?");
                $str->bindParam(1,$email,PDO::PARAM_STR);
                $str->bindParam(2,$user_name,PDO::PARAM_STR);
                $str->execute();
                return $str->fetch(PDO::FETCH_OBJ);
            }catch(Exception $e){
                die('mal aqui'.$e->getMessage());
            }
        }

        public function verifiedEmail($token_verified){
            try{
                $str = parent::conectar()->prepare("UPDATE users SET status_verified = 1 WHERE token_verified = ?");
                $str->bindParam(1,$token_verified,PDO::PARAM_STR);
                $str->execute();
            }catch(Exception $e){
                die('mal aqui'.$e->getMessage());
            }
        }
        

        public function stored($name, $user_name, $email, $password, $phone_number, $token_verified ,$fk_rol){
            try{
                $str = parent::conectar()->prepare("INSERT INTO users(name, user_name, email, password, phone_number, token_verified, fk_rol) VALUES(?,?,?,?,?,?,?)");
                $str->bindParam(1,$name,PDO::PARAM_STR);
                $str->bindParam(2,$user_name,PDO::PARAM_STR);
                $str->bindParam(3,$email,PDO::PARAM_STR);
                $str->bindParam(4,$password,PDO::PARAM_STR);
                $str->bindParam(5,$phone_number,PDO::PARAM_STR);
                $str->bindParam(6,$token_verified,PDO::PARAM_STR);
                $str->bindParam(7,$fk_rol,PDO::PARAM_INT);
                $str->execute();
            }catch(Exception $e){
                die('mal alli'.$e->getMessage());
            }
        }
    }
?>