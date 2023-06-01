export default {
  async fetch(request, env, ctx) {
    const { searchParams } = new URL(request.url);
    const customerIdFromURLQuery = searchParams.get("customerid");

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    };
    const { pathname } = new URL(request.url);
    try {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          headers: corsHeaders,
        });
      } else if (pathname === "/api/view/customers") {
        const results = await env.DB.prepare(
          "SELECT * FROM customers_data "
        ).all();
        return new Response(JSON.stringify(results), {
          headers: corsHeaders,
        });
      } else if (pathname === "/api/view/payments") {
        const results = await env.DB.prepare(
          "SELECT * FROM payments_data "
        ).all();
        return new Response(JSON.stringify(results), {
          headers: corsHeaders,
        });
      } else if (pathname === "/api/add/customer") {
        const body = await request.json();

        const query = body.map((row) => {
          return env.DB.prepare(
            "INSERT INTO customers_data (cabin, name, email, phone, gender) VALUES (?, ?, ?, ?, ?)"
          ).bind(row.cabin, row.name, row.email, row.phone, row.gender);
        });

        const results = await env.DB.batch(query);
        return new Response(JSON.stringify(results), {
          headers: corsHeaders,
        });
      } else if (pathname === "/api/add/payment") {
        const body = await request.json();

        const query = body.map((item) => {
          return env.DB.prepare(
            "INSERT INTO payments_data (transaction_id, customer_id, transaction_date, payment_mode, payment_month) VALUES (?, ?, ?, ?, ?)"
          ).bind(
            item.transaction_id,
            item.customer_id,
            item.transaction_date,
            item.payment_mode,
            item.payment_month
          );
        });
        const results = await env.DB.batch(query);

        return new Response(JSON.stringify(results), {
          headers: corsHeaders,
        });
      } else if (pathname === "/api/modify/customer") {
        const body = await request.json();
        const results = await env.DB.prepare(
          "UPDATE customers_data SET cabin = ?1, name = ?2, email = ?3, phone = ?4 gender = ?5 WHERE customer_id = ?6"
        )
          .bind(
            body.cabin,
            body.name,
            body.email,
            body.phone,
            body.gender,
            body.customer_id
          )
          .run();
        return new Response(JSON.stringify(body), {
          headers: corsHeaders,
        });
      } else if (pathname === "/api/modify/payment") {
        const body = await request.json();
        const results = await env.DB.prepare(
          "UPDATE payments_data SET customer_id = ?1, transaction_date = ?2, payment_mode = ?3, payment_month = ?4 WHERE transaction_id = ?6"
        )
          .bind(
            body.customer_id,
            body.transaction_date,
            body.payment_mode,
            body.payment_month,
            body.transaction_id
          )
          .run();
        return new Response(JSON.stringify(results), {
          headers: corsHeaders,
        });
      } else if (customerIdFromURLQuery) {
        const results = await env.DB.prepare(
          "SELECT * FROM customers_data WHERE customer_id = ?"
            .bind(Number(customerIdFromURLQuery))
            .all()
        );
        return new Response(JSON.stringify(results), {
          headers: corsHeaders,
        });
      }

      // Dashboard Data
      else if (pathname === "/api/total/customers") {
        const results = await env.DB.prepare(
          "SELECT COUNT(*) FROM customers_data;"
        ).all();
        return new Response(JSON.stringify(results), {
          headers: corsHeaders,
        });
      } else if (pathname === "/api/duepayments") {
        const results = await env.DB.prepare(
          "SELECT COUNT(DISTINCT customer_id) AS unique_customers FROM payments_data WHERE payment_month != '2022-05-01';"
        ).all();
        return new Response(JSON.stringify(results), {
          headers: corsHeaders,
        });
      }
    } catch (e) {
      return Response.json(e);
    }

    return new Response("Homepage", {
      headers: corsHeaders,
    });
  },
};
