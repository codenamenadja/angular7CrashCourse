    0.fill up page with angular-official guide(https://angular.io/guide/architecture)'s my own translation to korean
        0.1 Templates, directives, and data binding /done

    1.setting up angular7
        -allow routing  /done
        -styling to be scss /done

    2.generate 4 more components
        2.1 "nav" component generate /done
            work flow
            1.[ng g c nav] command in cli interface.
                -updated app.module.ts automatically
        2.2 "about" component generate /done
            work flow
            1.[ng g c about] as {2.1-1}
        2.3 "contact" component generate /done
            work flow
            1.[ng g c contact] as {2.1-1}
        2.4 "home" component generate /done
            work flow
            1.[ng g c home] as {2.1-1}

    3.change bootstraping html structure(app.component.html)
        3.1 remove whole thing except [<router-outlet>] /done
        3.2 show nav-components tag inside main html's [<section>] /done
    4.change nav html structure(nav.component.html)
        4.1 remove all /done
        4.2 add some [<a routerLink="/">] tags /done
    
    5.work with these components.
        5.1 add title propertie on nav-component /done
    6.configure global scss setting(styles.scss)
        6.1 paste from the source /done
        6.2 add nav-components scss. paste from the source/ done
    
    7.setup the routings.
        7.1 in app-routing.module.ts, set Routes as routes.
        and fill routing addr in side as [ routes:Routes =[
            {path:'about',component:AboutComponent}, ...
            ]; ]
    8.Make up with HomeComponent.
        8.1 build home html with [<button (click)="firstClick()">click me!<button>]
        8.2 add firstClick method to 'home.component.ts'file. gonna show message with window.alert().
    9.add Classbinding to home-h1. switch by home-button.
        9.1 add boolean attribute to home component named [h1Style:boolean = false;].
        9.2 add class binding to home.html.h1> elem. <[class.gray]= "h1Style"> goes into h1 inside.
        9.3 home.component's button click method appears => this.h1Style = !this.h1Style. made it to be opposite. click -> boolean to opposite -> if true -> class bind as 'gray'.
        9.4 add home.component.scss [.gray{color:gray}]
    10.multiple classbinding in single elem(tag).
        10.1 add p elem into home.C.html  with <p [ngClass]="{'gray':h1Style, 'large':!h1Style}">
        10.2 add new home.C.scss, .large{font-size:1.2rem} / event already bind to button, changes h1Style attr to opposite. so no more to do.
    11.style binding
        11.1 added h2tag into home.C.html <h2 [style.color]="h1style ?  'gray' : 'black'">
        11.2 for multiple stylebinding, added new home.C.html>p elem. <p [ngStyle]="{'color': h1Style ? 'gray' : 'orange', 'font-size' : h1Style ? '1.1rem' : '1.3rem'}"> / style binding would be better than class binding if only a few(1 or 2 -> not related, also not structural) changes.

    -- service --
    12.service creation
        12.1 generate service named data.
        12.2 make dataService.logMsg(arg) to logs out "executed during, [arg]." 
        12.3 home.component.ts>firstClick() uses this service method.
    13.http database connetion setup
        13.1 import HttpClientModule, and register in NgModule's imports.
        13.2 httpmodule places into service.
    14.dataService uses HTTP connected db.
        14.1 in dataService imports HttpClient. not HttpClientModule.
        14.2 dataService if set HttpClient done? -> add method [getUsers(){return this.http.get(api);}] to get fake users-list for practice.
        14.3 then home.C lifeCycle hook 'ngOnInit()' uses this.dbService.
        14.4 rename this.dbService to dService.
        14.5 this.dService.getUsers() in home.C return data transferred. so log That to make Sure.
        // by 14.5 we can find that data we got is userList-page1. each page has 3 users inspects. and there are 4page. so could be max 12 users.
        14.6 data we got will place in home.component's this.users:Object. place it into home.C.html.
        14.7 in home.C.html uses <ul *ngif="users"> and inside those, <li *ngFor="let user of users.data">. alse {{user.first_name}} <img [src]="user.avatar> for databinding.
        14.8 worked, get scss from sourseCode to look better.
        //37:26

        15.angular7 Forms.
            15.1 setUp ReactiveFormModule. import from '@angular/forms' and inject that.
            15.2 load {FormBuilder, FormGroup, Validators} in contact.C.ts from '@angular/froms'
            15.3 with FormBuilder.group() virtual group will place in this.messageForm:FormGroup.
            15.4 add form with Ng attr-binding, event-binding [formGroup]="messageForm" (ngSubmit)="onSubmit()" in contact.C.html.고
            15.5 in html, add some directives with *ngIf="" for error handling. error will be in component's messageForm's state.
        
        16.error handling
            16.1 data.service에 요청한 http관련 메서드객체를 리턴받을때 문제
                16.1.1 data 서비스에 요청한 http객체가 돌아왔을때 완전히 처리가 완료된 상태가 아닐 뿐더러 타입에 대한 정의가 난감한 상황이라 subscribe메서드 체이닝을 바로 이어서 하는데 문제가 생겼습니다. 돌려받은 객체가 아직 Get과정중이기 때문에 중간단계의 과정이라는 점도 조금 신경쓰입니다. 혹은 getUsers()의 타입이 명확하지 않기 때문에 any로 처리해 버리면 굉장히 간편하지만.
                16.1.2 subscribe메서드 자체를 data.service로 넘기고 promise처리를 해서 단계적으로 진행이 되도록 컨트롤을 하도록 해봅니다 subscribe의 콜백에서 res(userList)처리를 해버리기로 합니다.
                16.1.3 home.C에서는 res로 돌려받는 내용을 그대로 .then((userList)=>{this.users = data}); 로 처리하였습니다.
                16.1.4 해결은 되었습니다만, 원본이 변할때 async한 이벤트를 처리해주는 subscribe는 사용이 되는지 확인 할 수 없습니다.
                16.1.5 subscribe기능이 home안에서만 유효할 수 있도록 다시 돌려놓고 타입에 대한 정의만 any로 바꾸었습니다. 기존과 큰차이는 없지만, promise로 http통신 자체가 유효했는지 에러핸들링을 진행하였다는점. 분기를 만들었다는 점에서 기존보다 낫습니다.