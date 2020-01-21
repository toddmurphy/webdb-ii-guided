## Mantras

- every table MUST have a PRIMARY KEY
- every change to the database schema requires a new migration

## Expectations

- NOT about managing databases
- about using databases from an API
- about taking requirements and designing a data model(the db schema)

## Database Migrations

- a tool to evolve your database over time
- can create database objects
- can modify database objects
- live together with your application code. Pushed to source control (Git)
- written in JS

## An example

Song Suggester

- user profile
- favorite songs
- share their favorites or playlists
- playlists
- look for an artist, song, or genre
- according to mood
- similar on tempo and beats
- suggests songs/artists based on (current song, artist, mood, others?)

## Songs

- list of songs
- add a song
- import song metadata
- update a song
- remove a song
- add album art

## Song Schema

- id: Primary key, integer, auto-increment automatically
- name: string, not unique, max size of 255, indexed. An index is a way to make searches on this column faster.
- duration: integer (stored in seconds)
- artist: string, indexed
- favorite: boolean, default value: false
