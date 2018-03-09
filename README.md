# react_heroku_V01

### Set Up :

npm install

Les requetes graphql :

pour la création:

```
mutation {
  createPerson(firstName:"mahana", lastName: "delacour"){
    firstName,
    lastName
  }
}
```

pour l'index :

```
{
  allPersons{
    firstName,
    lastName
  }
}
```
