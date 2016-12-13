export default function( server ) {

  /*
   //server.loadFixtures()
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */
  server.loadFixtures('assets');
  const layout = server.create('layout', {name: 'uniqlo layout'});

  for (name of ["header1", "header2", "content", "footer"]) {
    server.create('section',  {name: name, layout: layout});
  }

  server.create('emailTemplate', {layout: layout})
}
