# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## Making a Webpack/Typescript App

1. `rails new <whatever> --webpack --skip-coffee`
 * you can change it to `--webpack=react`

2. `$ cd <whatever>`

3. `$ yarn add jquery`
 * requires yarn, don't remember how I installed it.  `rails new` might do it for you

4. `$ yarn add typescript`

5. `$ yarn add ts-loader`

6. Add some types:
```
$ yarn add @types/jquery --dev
$ yarn add @types/node --dev
```

7. Add a `tsconfig.json` to root directory

8. `$ rails g controller StaticController index`

9. `$ ./bin/webpack-dev-server`
 * This compiles all them files.  Will compile continuously for new files, so keep it running it the console somewhere.

10. Add static to routes

```ruby
# config/routes.rb
Rails.application.routes.draw do
  root 'static_controller#index'
end
```

11. Create `app/views/static_controller/index.html.erb`
```html
<div class="hello">
  <h1>Heyo</h1>
</div>

<%= javascript_pack_tag 'welcome' %>
```

12. Add `app/javascript/packs/welcome.ts`
```typescript
import * as $ from "jquery";

class HelloWorld {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    static print() {
        $(`div.hello h1`).append("NOT HELLO");
    }
}

HelloWorld.print();
```

12. `$ rails s`
 * Run in a separate tab from the `webpack-dev-server`


## Notes
* I also added `.ts` to the list of extensions in `config/webpacker.yml`.  I don't think this is strictly necessary.
* The `app/assets` directory might be useless at this point, stylesheets can also go into the `javascript` folder as well as images.  Not entirely sure how.
