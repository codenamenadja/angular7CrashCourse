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