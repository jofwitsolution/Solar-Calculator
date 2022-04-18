/*******************************************************
 * main.js
 * Oluwafemi Faleye
 *
 * This file contains programs that supports the navigation bar,
 * header and footer for all pages.
 *******************************************************/

// The navigation bar, header and footer function
function navbarHeaderFooter() {

    //function calls
    navBar();
    header();
    footer();

    // This function creates navigation bar
    function navBar() {
        var navbar = document.createElement('div');

        var a = document.createElement('a');
        var button = document.createElement('button');
        var span = document.createElement('span');

        var collapse = document.createElement('div');
        var ul = document.createElement('ul');
        var li;

        navbar.setAttribute('class', 'navbar py-3 navbar-dark bg-dark navbar-expand-sm');

        a.setAttribute('class', 'navbar-brand text-uppercase font-italic');
        a.setAttribute('href', '../solarCalculator/index.html');
        a.innerHTML = 'experience';

        button.setAttribute('class', 'navbar-toggler');
        button.setAttribute('type', 'button');
        button.setAttribute('data-toggle', 'collapse');
        button.setAttribute('data-target', '#navbarLinks');
        span.setAttribute('class', 'navbar-toggler-icon');

        collapse.setAttribute('class', 'collapse navbar-collapse');
        collapse.setAttribute('id', 'navbarLinks');

        ul.setAttribute('class', 'navbar-nav');

        li = getli('../solarCalculator/index.html', 'Home');
        ul.appendChild(li);
        li = getli('../solarCalculator/calculator.html', 'Calculator');
        ul.appendChild(li);
        li = getli('../solarCalculator/all-solar.html', 'All Solar');
        ul.appendChild(li);
        li = getli('../solarCalculator/series-parallel-connection.html', 'Series/Parallel');
        ul.appendChild(li);
        li = getli('../solarCalculator/battery-controller.html', 'Battery/Controller');
        ul.appendChild(li);
        li = getli('../solarCalculator/inverter.html', 'Inverter');
        ul.appendChild(li);
        li = getli('#', 'About');
        ul.appendChild(li);
        li = getli('#', 'Contact');
        ul.appendChild(li);

        collapse.appendChild(ul);

        button.appendChild(span);
        navbar.appendChild(a);
        navbar.appendChild(button);
        navbar.appendChild(collapse);
        document.body.insertBefore(navbar, document.body.childNodes[0]);


    } //end of navBar

    //This function creates header
    function header() {

        var header = document.createElement("header");
        var container = document.createElement('div');
        var row = document.createElement('div');
        var col = document.createElement('div');
        var h1 = document.createElement('h1');
        var strong = document.createElement('strong');
        var small = document.createElement('small');
        var p = document.createElement('p');


        header.setAttribute('id', 'header');
        header.setAttribute('class', 'bg-dark py-2');
        container.setAttribute('class', 'container');
        row.setAttribute('class', 'row align-items-center');
        col.setAttribute('class', 'col bg-dark ');
        h1.setAttribute('class', 'text-primary text-capitalize font-weight-bold font-italic text-center');
        small.setAttribute('class', 'text-light scroll');
        p.setAttribute('class', 'text-info text-justify lead mx-auto py-2 w-100');


        strong.innerHTML = 'everything solar';
        small.innerHTML = '<br><br> Light Your World';
        p.innerHTML = 'You want to install solar panel and inverter at home or ' +
            'offices, make use of our calculator to determine the ' +
            'type of inverter, solar panel, battery and solar ' +
            'accessories to select.';

        h1.appendChild(strong);
        h1.appendChild(small);
        col.appendChild(h1);
        col.appendChild(p);
        row.appendChild(col);
        container.appendChild(row);
        header.appendChild(container);
        document.body.insertBefore(header, document.body.childNodes[1]);

    } //end of header

    // This function creates footer
    function footer() {
        var footer = document.createElement("footer");
        var container = document.createElement("div");
        var row = document.createElement('div');
        var col = document.createElement('div');
        var copyright = document.createElement('p');
        var termsAndCondition = document.createElement('div');
        var privPolicy = document.createElement('p');
        var tAcLink = document.createElement('a');
        var ppLink = document.createElement('a');
        var a;

        footer.setAttribute('class', 'bg-dark py-5');
        container.setAttribute('class', 'container');
        row.setAttribute('class', 'row');
        col.setAttribute('class', 'col text-center');

        copyright.setAttribute('class', 'mt-2 text-capitalize text-muted');
        termsAndCondition.setAttribute('class', 'mt-2 text-muted');
        privPolicy.setAttribute('class', 'mt-2 text-muted');
        tAcLink.setAttribute('href', '#');
        ppLink.setAttribute('href', '#');
        tAcLink.setAttribute('target', '_blank');
        ppLink.setAttribute('target', '_blank');
        tAcLink.setAttribute('class', 'text-muted');
        ppLink.setAttribute('class', 'text-muted');


        copyright.innerHTML = 'copyright &copy; 2020 solar calculator';
        tAcLink.innerHTML = 'Terms and Conditions';
        ppLink.innerHTML = '<br>Privacy Policy';


        a = geti('facebook.com', 'fa-facebook');
        col.appendChild(a);
        a = geti('twitter.com', 'fa-twitter');
        col.appendChild(a);
        a = geti('instagram.com', 'fa-instagram');
        col.appendChild(a);
        a = geti('youtube.com', 'fa-youtube');
        col.appendChild(a);

        col.appendChild(copyright);
        col.appendChild(tAcLink);
        col.appendChild(ppLink);

        row.appendChild(col);
        container.appendChild(row);
        footer.appendChild(container);


        document.body.appendChild(footer);

    } // end of footer

    // This function creates link for the navigation bar list
    function getli(ref, label) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        li.setAttribute('class', 'nav-item');
        a.setAttribute('class', 'nav-link');
        a.setAttribute("href", ref);
        a.innerHTML = label;
        li.appendChild(a); // insert a into li
        return li;
    } // end of getli

    // This function creates font awesome icons and also, link for the icons.
    function geti(ref, fa_name) {
        var a = document.createElement("a");
        var i = document.createElement("i");
        a.setAttribute("target", '_blank');
        a.setAttribute("href", ref);
        a.setAttribute("class", 'btn');
        i.setAttribute("class", 'fab ' + fa_name + ' fa-3x text-primary m-2');
        a.appendChild(i); //insert i into a
        return a;
    } // end geti

} // end navbarHeaderFooter