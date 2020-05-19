# scrap_instagram_hashtag

A port of [mabc224/instagram-hashtag-scraper](https://github.com/mabc224/instagram-hashtag-scraper) into a npm module

## Install

[scrap_instagram_hashtag](https://www.npmjs.com/package/scrap_instagram_hashtag)

```
npm install scrap_instagram_hashtag
```

## Methods

#### hashtag

```javascript
hashtag: (hashtag?: string, options?: {
    limit: number;
    recent: boolean;
    defaults: {
        URL_INSTAGRAM_EXPLORE_TAGS: string;
        URL_INSTAGRAM_MEDIA_SHORTCODE: string;
        INSTAGRAM_DEFAULT_HASHTAG: string;
        INSTAGRAM_DEFAULT_FIRST: number;
    };
}) => Promise<[]>
```

Default options:

```javascript
{
    limit: 10,
    recent: true,
    defaults: {
        URL_INSTAGRAM_EXPLORE_TAGS: 'https://www.instagram.com/explore/tags/',
        URL_INSTAGRAM_MEDIA_SHORTCODE: 'https://www.instagram.com/p/',
        INSTAGRAM_DEFAULT_HASHTAG: 'landscape',
        INSTAGRAM_DEFAULT_FIRST: 10
    }
}
```


## Usage

Example:

```javascript
const instagram = require('scrap_instagram_hashtag');

instagram.hashtag('codingisfun')
.then(posts => {
    console.log(posts);
})
.catch(error => {
    console.log('Something went wrong', error);
})
```

Example Response:

```javascript
[{
    id: '2310252201240669291',
    caption: 'Rate this 1-10����� The one big "problem" with homeoffice is that it is difficult to stay away from work. \n' +
        'But now some headrest with garden work and boating.\n' +
        '・\n' +
        '__________________________________________\n' +
        '- #️⃣Use #codingdays for a repost�\n' +
        '- ➡️Follow @codingdays for more! �\n' +
        '- �Or DM your pic directly���\n' +
        '- � By @tord__nilsen\n' +
        '- �Founder: @rabbitofficial\n' +
        '__________________________________________\n' +
        '・\n' +
        '#tech #technology #computerscience #computer #codegoals #codeismylife #coderlife #worldcode #programmers #programmersday . #worldofprogrammers #codingpics #codingisfun #setup #softwareengineers #visualstudio #backenddeveloper #fullstackdeveloper #softwaredeveloper. #react #developers #developerlife #frontenddeveloper',
    post_url: 'https://www.instagram.com/p/CAPqiMEg6xr/',
    timestamp: '2020-05-16T10:05:45.000Z',
    image: 'https://instagram.flim20-1.fna.fbcdn.net/v/t51.2885-15/e35/97326858_239940670438966_2155081517003435687_n.jpg?_nc_ht=instagram.flim20-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=E4Y-eMvc6NcAX8CweVQ&oh=cbf01cdabf90a5e7d7473cab78a46df9&oe=5EEE11CF',
    dimensions: {
        height: 1080,
        width: 1080
    },
    likes: {
        count: 1967
    },
    comments: {
        count: 19
    },
    hashtags: [
        '#codingdays', '#tech',
        '#technology', '#computerscience',
        '#computer', '#codegoals',
        '#codeismylife', '#coderlife',
        '#worldcode', '#programmers',
        '#programmersday', '#worldofprogrammers',
        '#codingpics', '#codingisfun',
        '#setup', '#softwareengineers',
        '#visualstudio', '#backenddeveloper',
        '#fullstackdeveloper', '#softwaredeveloper',
        '#react', '#developers',
        '#developerlife', '#frontenddeveloper'
    ],
    pull_date: '2020-05-19T17:29:39.858Z',
    owner: {
        profile_pic_url: 'https://instagram.flim20-1.fna.fbcdn.net/v/t51.2885-19/s150x150/37210997_235062393986426_9079650529776238592_n.jpg?_nc_ht=instagram.flim20-1.fna.fbcdn.net&_nc_ohc=acv0crvcBzQAX8guqQD&oh=84c384803c98a97d9fb801e7b9f063c1&oe=5EEBA7D8',
        username: 'codingdays',
        full_name: 'Coding Days ▪ CODE | DEVS'
    }
}]
```

### External References and Resources

* [Instagram](https://www.instagram.com)

* [mabc224/instagram-hashtag-scraper](https://github.com/mabc224/instagram-hashtag-scraper)
