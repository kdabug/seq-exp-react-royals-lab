const { Kings, Queens } = require('./models');

async function seed(){
  try{
    await Kings.destroy({where:{}});
    await Queens.destroy({where:{}});

    const kings = await Kings.bulkCreate([
      {
        name: 'King Henry IV'
      },
      {
        name: 'Brian Boru'
      },
      {
        name: 'King Arthur'
      },
      {
        name: 'Mufasa'
      }
    ]);
    const queens = await Queens.bulkCreate([
      {
        name: "Cleopatra"
      },
      {
        name: "Beyonce"
      },
      {
        name: "Queen Elizabeth"
      },
      {
        name: "Queen Latifah"
      }
    ]);
  }
  catch(e){
    console.error(e);
  }
  process.exit();
}

seed();
