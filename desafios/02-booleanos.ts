// Boleanos

const userInformation = {
  name: "Diego Fernandes",
  height: 190,
  hasTicket: true,
};

const minimumHeightToEnterTheToy = 130;

const currentHour = new Date().getHours();

const isTheParkOpen = currentHour > 9 && currentHour < 18;

if (!isTheParkOpen) {
  throw new Error("O parque está fechado!");
}

const hasTheTicket = userInformation.hasTicket;

if (!hasTheTicket) {
  throw new Error("O Diego não possui um bilhete para entrar no parque!");
}

const isEntryAllowed = userInformation.height > minimumHeightToEnterTheToy;

if (!isEntryAllowed) {
  throw new Error("O Diego não pode entrar no brinquedo!");
}

console.log("O Diego se divertiu muito! :)");
