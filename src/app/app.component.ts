// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component, ViewChild } from '@angular/core';
import{QuotesComponent} from "./quotes.conponent";
import{LinksComponent} from "./links.component";

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app', // Определяется селектор-css для HTML-элемента, который будет представлять компонент.
    template: `<child-comp></child-comp>
               <div class="div">
               <div>
               <quotes-comp ></quotes-comp>
               <input type="text" [(ngModel)]="Quote" /><br />
               <button (click)="changeQuote([Quote])" >Добавить цитату</button>
               </div>
               <div>
               <links-comp ></links-comp>
               <input type="text" [(ngModel)]="Link" /><br />
               <button (click)="changeLink([Link])" >Добавить ссылку на ресурс</button>
               </div>
               </div>`,
    styleUrls: ['./app.component.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
    @ViewChild(QuotesComponent)
    private QuotesCom: QuotesComponent;
    Quote:string = "";
    
    @ViewChild(LinksComponent)
    private LinksCom: LinksComponent;
    Link:string = "";

    changeQuote(model: string) { this.QuotesCom.changeQuote(model); }
    
    changeLink(model: string){ this.LinksCom.changeLink(model);}
}