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
        9.3 home.component's button click method appears => this.h1Style = !this.h1Style. made it to be opposite.