let dropdownData = {
  data: {
    "Production Control": [
      {
        product: "TIA Portal",
      },
      {
        product: "Control Logix",
      },
      {
        product: "Orion",
      },
      {
        product: "Archestra System Platform",
      },
    ],
    MES: [
      {
        product: "Production Integrator",
      },
      {
        product: "Aveva MES SI-Kit",
      },
    ],
  },
};

let affectedSystems = document.getElementById("affectedSystems").innerHTML;
let sytemTemplate = Handlebars.compile(affectedSystems);
let system = document.getElementById("systems");
system.innerHTML = sytemTemplate(dropdownData);

function selectAffectedSystem(selectOption) {
  let value = selectOption.value;
  let prodData = dropdownData.data[value];
  let productInvolved = document.getElementById("productInvolved").innerHTML;
  let prodTemplate = Handlebars.compile(productInvolved);
  let prodHTML = prodTemplate(prodData);
  let product = document.getElementById("product");
  product.innerHTML = prodHTML;
}
