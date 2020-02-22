export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e50fd82051f08e721abe4f4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ka6ai23h',
                  apiId: '55fd804d-cc17-450e-8046-2f0062846ed4'
                },
                {
                  buildHookId: '5e50fd821487421440e0b2f7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-axhk8p5r',
                  apiId: '2f0e29af-ce2c-4a58-8bd8-2480e31ba778'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arsenijesavic/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-axhk8p5r.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
