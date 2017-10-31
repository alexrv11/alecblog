import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
//import * as firebase from 'firebase/app';
//import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';



@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})

export class CurriculumComponent implements OnInit {
  //user: Observable<firebase.User>;
  //inversors: FirebaseListObservable<any[]>;
  //displayedColumns = ['userId', 'userName', 'investment', 'penalitiesAmount'];
  //exampleDatabase = new ExampleDatabase();
  //dataSource: ExampleDataSource | null;

  @ViewChild('filter') filter: ElementRef;

  constructor(/*public afAuth: AngularFireAuth, public af: AngularFireDatabase*/) {
    /*this.inversors = af.list('/inversors', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;*/
  }

  ngOnInit() {
    //this.afAuth.auth.signInAnonymously();
/*
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        });*/
  }
}

 