import {Input, Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'quotes-comp',
    template: `<ng-content></ng-content>
               <h3> Цитаты Билла Гейтса </h3>
               <ul>
                  <li *ngFor="let quote of Quotes; let i = index">{{quote}}</li>
               </ul>`,
    styleUrls: ['./app.component.css']
    })
    export class QuotesComponent {
        Quotes = ["«Patience is a key element of success» ",
        "«If you think your teacher isnpm install tough, wait till you get a boss»",
        "«Life is not fair — get used to it! »",
        "«Success is a lousy teacher. It seduces smart people into thinking they can’t lose»",
        "«Be nice to nerds. Chances are you’ll end up working for one»"
        ]
        changeQuote(model: string){
            if(model != null && model!=""){
                model as string;
                this.Quotes.push(model);
            }
        }
    }