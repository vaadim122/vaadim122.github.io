String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
class Site {

    constructor() {
        this.el = document.getElementById('countries');
        this.countries = ['france', 'germany', 'england', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Ireland', 'Luxembourg'];

    }

    FetchAll() {

    	        this.countries = this.countries.map(function(item, i, arr) {
  return item.toLowerCase().replaceAt(0, item.charAt(0).toUpperCase());
});
        var data = '';

        if (this.countries.length > 0) {
            for (let i = 0; i < this.countries.length; i++) {
                data += '<tr>';
                data += '<td>' + '<img src='+ 'img\\'+ this.countries[i] +".png>" +'</td>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '<td><button onclick="site.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="site.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }
        this.Count(this.countries.length);
        return this.el.innerHTML = data;
    }

    Count(data) {
        var el = document.getElementById('counter');
        var name = 'country';

        if (data) {
            if (data > 1) {
                name = 'countries';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    }

    Add() {
        var el = document.getElementById('add-name');
        // Get the value
        var country = el.value;

        if (country) {
            // Add the new value
            this.countries.push(country.trim());
            // Reset input value
            el.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    }

    Edit(item) {
        var el = document.getElementById('edit-name');
        // Display value in the field
        el.value = this.countries[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function() {
            // Get value
            var country = el.value;

            if (country) {
                // Edit value
                self.countries.splice(item, 1, country.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                HideEdit();
            }
        }
    }

    Delete(item) {
        // Delete the current row
        this.countries.splice(item, 1);
        // Display the new list
        this.FetchAll();
    }
}

let site = new Site();
site.FetchAll();

function HideEdit() {
  document.getElementById('spoiler').style.display = 'none';
}

HideEdit();