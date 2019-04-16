# JS & Rockets

Welcome to our little coding exercise. During this test you will be given the opportunity to play with Javascript and rockets, in the same project. Some people might be horrified at the thought of this being even a possibility. But Javascript is what we do isn't it?

<img src="https://i.imgur.com/ekyJNd9.jpg" width="600">

Before you begin please make sure you read the entire file and that you understand everything. If there's anything that you don't please don't hesitate to reach out to ask.

We'd like to give all candidates taking this test the same chances to solve the exercise in their own way. Because of this we ask you to please **do not fork or share this repo** with anybody.


## Instructions

1. **Clone** this repo to a location of your choosing.
2. Write your solution to the exercise making sure tests are green.
4. Push your solution to a **private** repo in your personal Github account.
5. When you are ready for us to take a look add the user `adjust-frontend` as collaborator to your repo.


## Exercise

Using the data from `https://api.spacexdata.com/v3/launches/past` consolidate a list of all the missions that were launched in 2018 that carried a payload that belonged to NASA.
Missions should appear in inverse chronological order with the exception that those that carried more payloads that should appear first.

Display the outcome of your solution by rendering the list to the screen as JSON while keeping an indentation of 2 spaces. To make the evaluation process simpler we only care to see the flight number, the mission name and the amount of payloads carried by each mission.


## Expected output

Your solution is expected to render the following:

```json
[
  {
    "flight_number": 62,
    "mission_name": "Iridium NEXT Mission 6",
    "payloads_count": 2
  },
  {
    "flight_number": 72,
    "mission_name": "CRS-16",
    "payloads_count": 1
  },
  {
    "flight_number": 64,
    "mission_name": "CRS-15",
    "payloads_count": 1
  },
  {
    "flight_number": 60,
    "mission_name": "TESS",
    "payloads_count": 1
  },
  {
    "flight_number": 59,
    "mission_name": "CRS-14",
    "payloads_count": 1
  }
]
```


## Clarifications:

- You can use **any** libraries you see fit.
- You cannot use any of the filter parameters provided by the SpaceX API.
- It doesn't matter to which NASA program each payload belongs to as long as NASA is the customer.
- Payloads are carried in the second stage of a rocket and they can belong to multiple customers.
- Please use UTC dates for anything time related.
