import { Injectable } from '@angular/core';
import { Http, Headers, Response }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PublicService {
    private twitterAPI:string = "https://api.twitter.com/1.1/";
    private header:any;
    constructor(private http: Http) {
        
    }


    //returns tweets that got created within 2 years.
    //id=${id}&

    getToken():Promise<any>{
        let head = new Headers({'Authorization':"Basic NUhyZ1l0TzVIUFI3cFZMd1JSU0RnYnlGMjp0dG9sdFI4WVJFNk9QR21GTXFqdzB6eE5jbDFYWG1tcTVDS2pOZDdJd0xTUHVRZ1lINQ==", 'Content-Type':"application/x-www-form-urlencoded;charset=UTF-8"});
        let ro = {};
        ro["grant_type"] = "client_credentials";

        let ret = this.http.post('https://api.twitter.com/oauth2/token', "grant_type:client_credientails", {headers:head})
            .toPromise();
            ret.then((response:object) => {
                this.header = new Headers({"Authorization": response["token_type"]+ " " + response["access_token"]});

                }
            )
            return ret;
    }
getAllTweets(id?:string):any{
    let tweets:Object[]= [];
    this.http.get(`${this.twitterAPI}statuses/user_timeline.json?screen_name=twitterapi&count=2`, {headers: this.header})   
            .toPromise().then(response=>{
                let received = response.json();
                console.log(received);
                let twoYear = new Date(new Date().getMonth() - 24);
                console.log(twoYear);
                while(new Date(received[200]["created_at"]) > twoYear){
                    this.http.get(`${this.twitterAPI}statuses/user_timeline.json?user_id=${id}&count=200&max_id=${received[200]["id"]}`, {headers: this.header})
                    .toPromise()
                    .then(response =>{
                        tweets.concat(received);
                        received = response.json();
                        
                    })
                    
                    tweets.concat(received);
                    
                }

                let last = received.filter((value:Object) => {
                    return value["created_at"] > twoYear;
                })

                return tweets.concat(last);
            })

  }




  //return location by API

}
