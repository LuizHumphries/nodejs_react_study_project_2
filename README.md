# App

GymPass Style app.

## RFs - Requisitos Funcionais (functional requirements)

- [x] User can make a register
- [x] User can authenticate
- [x] User can retrieve its own profile data
- [ ] User can see the number of check-ins done
- [ ] User can check the chek-in history
- [ ] User can search for near gyms
- [ ] User can search gym by name
- [x] User can check-in in a academy
- [ ] Gym can validate user check-in
- [ ] A user can create an gym / register a gym
...

## RNs - Regras de negócio (business rules)

- [x] Email must be unique
- [x] User can only use one check-in per day
- [x] User can only make a check-in if near the gym (100m)
- [ ] Check-in can only be validated before 20min after created.
- [ ] Check-in can only be validated by admin role user
- [ ] Only admin can create a gym
...

## RNFs - Requisitos não funcionais (non functional requirements)

- [x] User password must be hashed / crypto
- [x] App data must persist into a PostgressSQL
- [ ] Maximum items per page - 20, if pagination required
- [ ] User must be identified with JWT (auth)
...