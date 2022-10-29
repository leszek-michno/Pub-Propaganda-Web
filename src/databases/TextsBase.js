import React from "react";
import { NavLink } from "react-router-dom";

export const Hallow = () => {
  return (
    <div className="text">
      <p>
        Halloweenowa noc w propagandzie - jedyna taka przerażająca noc. Przynieś
        swój kostium i złap nasz specjalne upiorne menu!
      </p>
      <p>Drzwi do upiorności otworzą się 31.10 o godz. 17.00</p>
    </div>
  );
};

export const HallowEng = () => {
  return (
    <div className="text">
      <p>
        Halloween Night at Propaganda - only one night as scary as this. Bring
        your costume and enjoy our special spooky drinks menu!
      </p>
      <p>The doors to horror will open on 31.10 at 5 p.m. </p>
    </div>
  );
};

export const Tshirt = () => {
  return (
    <div className="text">
      <p>
        Z powodu braku miejsca nie jesteśmy w stanie trzymać wszystkich
        t-shirtów w lokalu. Dlatego, jeżeli ktoś chcę nabyć nasz t-shirt to:
      </p>
      <p>
        {" "}
        1) prosimy o złożenie zamówienia (np. za pomocą messengera lub e-maila
        <NavLink className="link" to="/polish/contact">
          {" "}
          <em>kliknij tutaj</em>{" "}
        </NavLink>
        ). Wystarczy podać jakieś imię (byśmy przekazali towar odpowiedniej
        osobie), ilość i rozmiar zamawianych t-shirtów;
      </p>
      <p> 2) następnego dnia towar będzie do odbioru w Pubie Propaganda;</p>

      <p> 3) będzie tam czekał na zamawiającego przez tydzień; </p>
      <p>
        {" "}
        4) jeżeli nie zostanie w tym czasie odebrany, to zamówienie będzie
        automatycznie anulowane.
      </p>
      <p> Cena jednego t-shirta: 60 zł (płatne przy odbiorze).</p>
      <span> Obecnie mamy t-shirty: </span>
      <br />
      <span> - kobiece w rozmiarach L, M, S, XS;</span>
      <br />
      <span> - męskie w rozmiarach: XL, L, M, S.</span>
      <p>Uwaga! Nie prowadzimy sprzedaży wysyłkowej.</p>
    </div>
  );
};

export const TshirtEng = () => {
  return (
    <div className="text">
      <p>
        Because of the lack of space, we are not able to store everyone
        t-shirts in the pub. So, if someone wants to buy our t-shirt:
      </p>
      <p>
        1) please place the order (via messenger or e-mail
        <NavLink className = "link" to = "/english/contact_Eng">
          <em> click here </em> 
        </NavLink>
        ). It is enough to enter a name (so that we can pass the goods to the appropriate 
        person), the number and size of the ordered t-shirts;
      </p>
      <p> 2) the next day the goods will be available for collection at the Propaganda Pub; </p>
      <p> 3) he will be waiting for the ordering party there for a week; </p>
      <p>
        {""}
        4) if it is not picked up within this time, the order will be
        automatically canceled.
      </p>
      <p> Price of one t-shirt: PLN 60 (payable upon delivery). </p>
      <span> We currently have t-shirts: </span>
      <br />
      <span> - feminine in sizes L, M, S, XS; </span>
      <br />
      <span> - men in sizes: XL, L, M, S. </span>
      <p> Note! We do not sell by mail order. </p>
    </div>
    );
}



export const Est = () => {
  return (
    <div className="text">
      <br />
      <p>
        W piątek (15 kwietnia) i sobotę (16 kwietnia) lokal otwarty od godz.
        18.00 do godz. 4.00.
      </p>
      <p>W niedzielę (17 kwietnia) lokal zamknięty!</p>
      <p>W poniedziałek (18 kwietnia) lokal otwarty od 17.00 do 2.00.</p>
    </div>
  );
};

export const EstEng = () => {
  return (
    <div className = "text">
       <br />
       <p>
         On Friday (April 15) and Saturday (April 16), the pub is open from
         6 pm to 4 am
       </p>
       <p> The place is closed on Sunday (April 17)! </p>
       <p> On Monday (April 18) the place is open from 5 pm to 2.00 am. </p>
     </div>
    );
}
