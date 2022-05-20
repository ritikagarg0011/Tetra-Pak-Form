// const form = document.getElementById("form");
// const radio1 = document.getElementById("tech");
// const radio2 = document.getElementById("support");
// const company = document.getElementById("company");
// const customer = document.getElementById("customer");
// const select1 = document.getElementById("systems");
// const select2 = document.getElementById("product");
// const description = document.getElementById("description");
// const question = document.getElementById("question");

// form.addEventListener("submit", validate);

class ValidateForm {
  constructor() {
    this.form = document.getElementById("form");
    this.radio1 = document.getElementById("tech");
    this.radio2 = document.getElementById("support");
    this.company = document.getElementById("company");
    this.customer = document.getElementById("customer");
    this.select1 = document.getElementById("systems");
    this.select2 = document.getElementById("product");
    this.description = document.getElementById("description");
    this.question = document.getElementById("question");
  }
  validate() {
    if (radio1.checked == false && radio2.checked == false) {
      document.getElementById("radioError").innerHTML =
        "Please select this field";
    } else {
      document.getElementById("radioError").innerHTML = "";
    }
    if (company.value == "") {
      document.getElementById("companyError").innerHTML =
        "Please fill this field";
      document.getElementById("company").classList.add("errorfield");
    } else {
      document.getElementById("companyError").innerHTML = "";
      document.getElementById("company").classList.add("successfield");
    }
    if (customer.value == "") {
      document.getElementById("customerError").innerHTML =
        "Please fill this field";
      document.getElementById("customer").classList.add("errorfield");
    } else {
      document.getElementById("customerError").innerHTML = "";
      document.getElementById("customer").classList.add("successfield");
    }
    if (select1.value == "") {
      document.getElementById("sysError").innerHTML =
        "Please select this field";
      document.getElementById("systems").classList.add("errorfield");
    } else {
      document.getElementById("sysError").innerHTML = "";
      document.getElementById("systems").classList.add("successfield");
    }
    if (select2.value == "") {
      document.getElementById("prodError").innerHTML =
        "Please select this field";
      document.getElementById("product").classList.add("errorfield");
    } else {
      document.getElementById("prodError").innerHTML = "";
      document.getElementById("product").classList.add("successfield");
    }
    if (description.value == "") {
      document.getElementById("descError").innerHTML = "Please fill this field";
      document.getElementById("description").classList.add("errorfield");
    } else {
      document.getElementById("descError").innerHTML = "";
      document.getElementById("description").classList.add("successfield");
    }
    if (question.value == "") {
      document.getElementById("questionError").innerHTML =
        "Please fill this field";
      document.getElementById("question").classList.add("errorfield");
    } else {
      document.getElementById("questionError").innerHTML = "";
      document.getElementById("question").classList.add("successfield");
    }
  }
}

let validation =  new ValidateForm();

export default ValidateForm;
