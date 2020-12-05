import{NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { UserComponent } from './user/user.component'
const routes:Routes=[
    {
        path:"home",
        component:UserComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class Childroutes {
}
