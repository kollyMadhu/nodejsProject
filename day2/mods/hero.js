 export class Hero{
        constructor(fn){
            this.fn = fn;
            this._secret ="my secret";
        }
        static defaultcity(){
            return "bangalore";
        }
        sayname(){
            return "my name is "+this.fn
        }
        setSecret(newsecret){
 this_secret = newsecret;
        }
        getSecret(newsecret){
            return this._secret;
        }
    };