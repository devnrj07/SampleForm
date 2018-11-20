import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }


private userUrl = 'http://localhost:8102/user';


public getUser() {
  return this.http.get(this.userUrl+"s");
}



public deleteUser(user) {
  return this.http.delete(this.userUrl + "/"+ user.id);
}

public createNewProfile(UserProfile) {
  return this.http.post('http://localhost:8102/profile', UserProfile);
}

public authenticateUser(User){
    return this.http.post(this.userUrl, User);
}


}