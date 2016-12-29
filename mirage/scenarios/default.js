import assetFixtures from "../fixtures/assets";

export default function( server ) {

  /*
   //server.loadFixtures()
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */
  const assets = assetFixtures.map(asset => server.create('asset', asset));
  const layout = server.create('layout', {name: 'uniqlo layout'});

  const sections = ["header1", "header2", "content", "footer"].map(name => {
    return server.create('section',  {name: `uniqlo ${name}`, layout: layout});
  });
  const emailTemplate = server.create('emailTemplate', {name: "uniqlo standard", layout: layout});
  const assetMappings = [0,1, 3].map(i => {
    return server.create('asset-mapping', {
      emailTemplate: emailTemplate,
      section: sections[i],
      asset: assets[i]
    });
  });
  emailTemplate.assetMappings = assetMappings;

}
