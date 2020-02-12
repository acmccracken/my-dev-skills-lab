$('#getInput').on('click', function() {
    let skill = $('input').val();
    let newSkill =
    `<tr>
      <td><button class="btn-danger">X</button></td>
      <td class="skills">${skill}</td>
    </tr>`
    $('tbody').append(newSkill);
    $('input').val('');
});
$('table tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(200, function() {
        $(this).remove();
    });
});
