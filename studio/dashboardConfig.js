export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62af720e446d527e83d29b0c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-7ctj21pi',
                  apiId: '148c9c13-f5e9-4e4f-9027-4b10963d8e63'
                },
                {
                  buildHookId: '62af720e77999b7b740700b0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-343d8yxb',
                  apiId: '7b1be891-43a0-41ce-9f76-61bbdc2cfa4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dimiboi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-343d8yxb.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
