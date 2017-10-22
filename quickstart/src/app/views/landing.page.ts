import { Component }    from '@angular/core';
import { PublicService } from '../service/public.service';

@Component ({
    templateUrl: './landing.page.html',
    styleUrls: []
})

export class Landing{
    constructor( private publicService:PublicService){
        this.publicService.getToken()
            .then(success => {
                this.publicService.getAllTweets();
                
            })
    }
    
}