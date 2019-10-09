# JS & Rockets

Welcome to our little coding exercise. During this test you will be given the opportunity to play with Javascript and rockets, in the same project. Some people might be horrified at the thought of this being even a possibility. But Javascript is what we do isn't it?

<img src="https://i.imgur.com/ekyJNd9.jpg" width="600">

Before you begin please make sure you read the entire file and that you understand everything. If there's anything that you don't please don't hesitate to reach out to ask.

We'd like to give all candidates taking this test the same opportunity to solve the exercise in their own way, because of this we kindly ask you **not to fork or share this repo (or your solution) with anybody**


## Instructions

1. **Clone** this repo to a location of your choosing.
2. Write your solution to the exercise making sure the provided tests are green.
3. Push your solution to a **private repo** in your **personal Github account**.
4. When you are ready for us to take a look add the user `adjust-frontend` as collaborator to your repo.


## Exercise

Using the past launches endpoint from the SpaceX API consolidate a list of all the missions that were launched in 2018 that carried a payload that belonged to NASA. Missions should appear in inverse chronological order with the exception that those that carried more payloads that should appear first.

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
- You can request the data from `https://api.spacexdata.com/v3/launches/past`, but you are not allowed to use any of the filter parameters provided by the SpaceX API.
- It doesn't matter to which NASA program each payload belongs to as long as NASA is the customer.
- Payloads are carried in the second stage of a rocket and they can belong to multiple customers.
- Please use UTC dates for anything time related.


## Helpful links:

- [SpaceX API Docs][spacex-api]
- [Inviting collaborators to a personal repository][github-collaborators]


[spacex-api]: https://docs.spacexdata.com/?version=latest#fce450d6-e064-499a-b88d-34cc22991bcc
[github-collaborators]: https://help.github.com/en/articles/inviting-collaborators-to-a-personal-repository