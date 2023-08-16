# Project Track It

The Track It project is a complete habit tracking application. With it, you can create and track your daily, weekly, and monthly habits. Track It lets you record your habits and monitor your progress quickly and easily. It offers an intuitive and easy-to-use interface that allows you to add and delete habits with just a few clicks. The app also offers a number of features like notifications and a rewards system to keep you motivated and on track. See below how to run the application and check the link to access it online.

<div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
<img src="https://user-images.githubusercontent.com/95102911/226362966-2285e429-aa5d-4e43-8574-13ec3fa2a918.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226362991-8f79ac8f-d360-4059-9e2b-88e3398b9d2f.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226363004-0f72b6aa-3d9a-4db7-aff5-63e697946c9e.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226363015-6a984be0-bed3-4762-91b8-b1c3f9293d89.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226363020-912efd27-98ea-49b2-acfc-865969f1f61e.png" width="300">
<img src="https://user-images.githubusercontent.com/95102911/226363024-260acb22-4e00-4f54-a10e-0573474fb5c5.png" width="300">
</div>

#### Demo: https://projeto11-trackit-fawn-kappa.vercel.app/

<hr/>

# ℹ️ About
Track It was created to help people track their habits and reach their goals. It was developed with the following features:

- Login Screen: allows the user to log in to the application and be redirected to the daily monitoring screen
- Registration screen: allows the user to create a new account in the application
- Habits Screen: allows the user to view their habits and create new habits
- Today Screen: Allows the user to track their daily habits and see their progress

Track It was developed with the aim of helping people achieve their goals and improve their lives. The motivation behind this project was to provide a simple and easy-to-use tool that would help people stick to their habits and reach their goals more efficiently.

<hr/>

## 🛠️ Technologies

<div> 
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="52" alt="html5 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="52" alt="css3 logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" width="52" alt="figma logo"   />        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" /> 
<div>
<br>

React was chosen as the core technology because it offers a number of resources and libraries that facilitate the development of user interfaces. Axios was used to make the HTTP calls to the project's API and Styled Components was used to style the application's components.

<hr/>
    
## 🖇 How to run
To run the application, follow these steps:

1. Clone the repository using the following command: git clone https://github.com/natividadesusana/trackit.git
2. Navigate to the project folder: cd trackit
3. Install project dependencies: npm install
4. Run the application: npm start
5. Access the application in your browser at: http://localhost:3000

<hr/>

# API

- Sign up
    
     To register, make a `POST` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up
     ```
    
     sending a body in the format
    
     ``` jsx
     {
       email: "...",
       name: "...",
       image: "...",
       password: "..."
     }
     ```
- Login
    
     To register, make a `POST` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login
     ```
    
     sending a body in the format
    
     ``` jsx
     {
       email: "...",
       password: "..."
     }
     ```
    
     The server will respond with an object of the form
    
     ```json
     {
         "id": 3,
         "name": "Joe",
         "image": "https://http.cat/411.jpg",
         "email": "joe@respondeai.com.br",
         "password": "123456",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
     }
     ```
- Create habit
    
     To create a habit, make a `POST` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits
     ```
    
     sending a body in the format
    
     ``` jsx
     {
       name: "Habit name",
       days: [1, 3, 5] // Monday, Wednesday and Friday
     }
     ```
    
     and an `Authorization` header with `Bearer TOKEN` format
    
     The server will respond with an object of the form
    
     ```json
     {
       id: 1,
       name: "Habit name",
       days: [1, 3, 5]
     }
     ```
- list habits
    
     To list user habits, make a `GET` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits
     ```
    
     with an `Authorization` header with `Bearer TOKEN` format
    
     The server will respond with an array of the form
    
     ```json
     [
      {
       id: 1,
       name: "Habit name",
       days: [1, 3, 5]
      },
      {
       id: 2,
       name: "Habit 2 name",
       days: [1, 3, 4, 6]
      }
     ]
     ```
- Delete habit
    
     To delete a user habit, make a `DELETE` request to the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO
     ```
    
     with an `Authorization` header with `Bearer TOKEN` format, replacing `HABIT_ID` in the URL with the id of the habit to be deleted.
    
     **Tip**: research how to send a `DELETE` request with axios

- Search for today's habits
    
     To list user habits, make a `GET` request for the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today
     ```
    
     with an `Authorization` header with `Bearer TOKEN` format
    
     The server will respond with an array of the form
    
     ```json
     [
         {
             "id": 3,
             "name": "Wake",
             "done": true,
             "currentSequence": 1,
             "highestSequence": 1
         }
     ]
     ```
- Mark habit as done
    
     To list the user's habits, make a `POST` request, with an empty body, for the URL
    
     ```
     https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/check
     ```
    
     with an `Authorization` header with `Bearer TOKEN` format, replacing `HABIT_ID` in the URL with the id of the habit to be tagged.
    
     If:
    
     - The habit is already checked
     - The habit is not current day
     - The habit is not of the logged in user
    
     the server will respond with `Bad Request (400)`.

- Desmarcar hábito como feito
    
    Para fazer listar os hábitos do usuário, faça uma requisição `POST` , com o body vazio, para a URL
    
    ```
    https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO/uncheck
    ```
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`, substituindo `ID_DO_HABITO` na URL pelo id do hábito a ser marcado.
    
    Se:
    
    - O hábito não estiver marcado
    - O hábito não for do dia atual
    - O hábito não for do usuário logado
    
    o servidor vai responder com `Bad Request (400)`.

- Histórico de hábitos diário
    
    Para obter o histórico de hábitos diário do usuário, faça uma requisição `GET` para a URL
    
    ```
    https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily
    ```
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`
    
    O servidor responderá com um array no formato
    
    ```json
    [
        {
            "day": "20/05/2021",
            "habits": [
                {
                    "id": 3,
                    "name": "Acordar",
                    "date": "2021-05-20T12:00:00.000Z",
                    "weekDay": 4,
                    "historyId": null,
                    "done": false
                }
            ]
        },
        {
            "day": "19/05/2021",
            "habits": [
                {
                    "id": 3,
                    "name": "Acordar",
                    "date": "2021-05-19T12:00:00.000Z",
                    "weekDay": 3,
                    "historyId": 626,
                    "done": true
                },
                {
                    "id": 1,
                    "name": "Ler 1 capítulo do livro",
                    "date": "2021-05-19T12:00:00.000Z",
                    "weekDay": 3,
                    "historyId": 625,
                    "done": true
                }
            ]
        },
        {
            "day": "18/05/2021",
            "habits": [
                {
                    "id": 3,
                    "name": "Acordar",
                    "date": "2021-05-18T12:00:00.000Z",
                    "weekDay": 2,
                    "historyId": 7,
                    "done": true
                }
            ]
        },
        {
            "day": "17/05/2021",
            "habits": [
                {
                    "id": 1,
                    "name": "Ler 1 capítulo do livro",
                    "date": "2021-05-17T12:00:00.000Z",
                    "weekDay": 1,
                    "historyId": 1,
                    "done": true
                }
            ]
        },
        {
            "day": "16/05/2021",
            "habits": [
                {
                    "id": 1,
                    "name": "Ler 1 capítulo do livro",
                    "date": "2021-05-16T12:00:00.000Z",
                    "weekDay": 0,
                    "historyId": null,
                    "done": false
                }
            ]
        },
        {
            "day": "14/05/2021",
            "habits": [
                {
                    "id": 1,
                    "name": "Ler 1 capítulo do livro",
                    "date": "2021-05-14T12:00:00.000Z",
                    "weekDay": 5,
                    "historyId": null,
                    "done": false
                }
            ]
        }
    ]
    ```
    
