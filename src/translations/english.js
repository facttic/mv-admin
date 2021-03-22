import englishMessages from "ra-language-english";

const english = {
    ...englishMessages ,
    login:{
        authError: "Wrong Email or password"
      },
      user: {
        create: {
          name: "Name",
          email: "Email",
          password: "Password",
          confirm: "Confirm",
        },
        edit: {
          name: "Name",
          email: "Email",
          manifestation: "Manifestation",
        },
        list: {
          name: "Nombre",
          email: "Email",
          manifestation: "Manifestation",
        },
      },
      manifestation: {
        create: {
          name: "Name",
          uri: "URI",
          user: "User",
          title: "Creating Manifestation",
        },
        management: {
          title: "Title",
          subtitle: "Subtitle",
          description: "Description",
          footer: "Footer",
          sponsors: {
            title: "Sponsors",
            name: "Name",
            logoUri: "Logo",
            pageUri: "Page",
          },
          hashtags: {
            title: "Hashtags",
            name: "Hashtag",
            source: "Source",
          },
          metadata: {
            title: "Title",
            keywords: "Keywords",
            description: "Description",
          },
          styles: {
            colors: {
              background: "Background",
              accent: "Accent",
            },
            text: {
              title: {
                font: "Font",
                color: "Color",
              },
              subtitle: {
                font: "Font",
                color: "Color",
              },
              body: {
                font: "Font",
                color: "Color",
              },
              placeholder: "Google fonts ex.'roboto'",
            },
            thumbnails: {
              columns: "Columns",
              colors: {
                hover: "Color hover",
                border: "Color border",
              },
            },
            cards: {
              darkmode: "Darkmode",
            },
          },
          images: {
            header: "Header",
            favicon: "Favicon",
            background: "Background",
            og: {
              twitter: "Twitter",
              facebook: "Facebook",
            },
          },
          config: { 
            twitter: { 
              active: "Active",
              scheduleSchema: "ScheduleSchema",
              maxTweets: "MaxTweets",
              maxTweetsPerQuery: "MaxTweetsPerQuery",
              api:{
                consumerKey: "ConsumerKey",
                consumerSecret: "ConsumerSecret",
                accessTokenKey: "AccessTokenKey",
                accessTokenSecret: "AccessTokenSecret",
              }
             },
             instagram: { 
              active: "Active",
              scheduleSchema: "ScheduleSchema",
              maxPosts: "MaxPost",
              impersonate:{
                username: "Username",
                password: "Password",
              }
             },
             mediaCleaner:{
              active: "Active",
              scheduleSchema: "ScheduleSchema"
            }
          },
          startDate: "Start Date",
          endDate: "End Date",
        },
      },

}

export default english;