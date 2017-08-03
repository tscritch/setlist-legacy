![logo](http://tadscritchfield.com/projects/setlist/setlist-github-logo.png)

# Setlist

##### How to use _Setlist_:

Add as many songs as you want _Setlist_ to choose from to the song list. Then choose how many songs you want in your template. Add speed and one tag for each song in the template. Click _create setlist_ and **BOOM!!** Service is planned! Keep clicking _create setlist_ until all your setlists are planned.

##### Why I made _Setlist_

As a worship leader, I have created short lists of around 20 songs to choose from for the upcoming quarter. It allows the worship team to know the songs more intimately as well as the congregation. However, most of my time spent planning services is spent looking over this list multiple times to find the song that will fit perfectly for that week's service. I have made _Setlist_ to take songs from a list and, using a setlist template, it will create a setlist for the service based on the song's metadata.

This Node.js app was created using Express, AngularJS and is served up using Docker on a Linode server.

Setlist: [setlist](http://tadscritchfield.com:3000)

Docker Cloud: [tscritch/setlist](https://cloud.docker.com/swarm/tscritch/repository/docker/tscritch/setlist/general)

#### ROADMAP

*   Integrate Planning Center API
    *   Search for songs to import
    *   Export a setlist to a specific plan within Planning Center and on to Proclaim
*   Autocomplete for already existing tags
*   Error notifications for non-existing tags
