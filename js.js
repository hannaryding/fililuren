<input type="checkbox" name="False" id="Fel" value="False" onclick="
    if (confirm('Are you sure?')) {
        this.form.submit();
    } else {
        this.checked = false;
    };
"/>
