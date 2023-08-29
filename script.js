$(document).ready(function () {
  function copyResidentialAddress() {
    $("#mailing-address").val($("#address").val());
    $("#mailing-address-2").val($("#address-2").val());
    $("#mailing-city").val($("#city").val());
    $("#mailing-zip").val($("#zip").val());
  }

  function clearMailingAddress() {
    $("#mailing-address").val("");
    $("#mailing-address-2").val("");
    $("#mailing-city").val("");
    $("#mailing-zip").val("");
  }

  function disableMailingFields(disable) {
    $("#mailing-address, #mailing-address-2, #mailing-city, #mailing-zip").prop(
      "disabled",
      disable
    );
  }

  $("#same-address").change(function () {
    if ($(this).is(":checked")) {
      copyResidentialAddress();
      disableMailingFields(true);
      $(
        "#mailing-address, #mailing-address-2, #mailing-city, #mailing-zip"
      ).removeClass("required-error");
    } else {
      clearMailingAddress();
      disableMailingFields(false);
    }
  });

  $("#submit").click(function (event) {
    event.preventDefault();

    $(".required").removeClass("required-error");

    disableMailingFields(false);
    $("#same-address").prop("checked", false);

    let isValid = true;

    $(".required").each(function () {
      if ($(this).val() === "") {
        $(this).addClass("required-error");
        isValid = false;
      }
    });

    if (!isValid) {
      alert("Please fill out the required fields.");
    } else {
      $("#granicus-form").submit();
      alert("Form submitted");
      console.log($("#granicus-form").serializeArray());
    }
  });

  $(".required").blur(function () {
    if ($(this).val() === "") {
      $(this).addClass("required-error");
    } else {
      $(this).removeClass("required-error");
    }
  });

  $("#cancel").click(function () {
    $("input").val("");

    $("#same-address").prop("checked", false);

    $(".required").removeClass("required-error");

    clearMailingAddress();
    disableMailingFields(false);
  });
});
