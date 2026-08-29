const SUPABASE_URL = "https://jasjdenytbgeeqotgwzh.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable__qT3cmh3mIhW5jk__IXM1Q_Y4XPvc_I";


const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("Supabase carregado:", supabaseClient);

/*async function testarSupabase() {

    const { data, error } = await supabaseClient
    .from("Respostas convite")
    .insert([
        {
            nome: "TESTE",
            confirmado: true,
            tem_acompanhante: false,
            nome_acompanhante: null,
            bebidas: ["Gin", "Cerveja"],
            bebidas_acompanhante: [],
            musicas: ["Dancing Queen"]
        }
    ]);


    if (error) {

        console.error(
            "ERRO AO GUARDAR:",
            error.message,
            error.details,
            error.hint,
            error.code
);
        return;

    }


    console.log(
        "RESPOSTA GUARDADA COM SUCESSO:",
        data
    );

}*/

async function saveToSupabase() {

    const { data, error } = await supabaseClient
        .from("Respostas convite")
        .insert([
            {
                nome: guest.name,
                confirmado: true,
                tem_acompanhante: guest.hasCompanion,
                nome_acompanhante: guest.companionName || null,
                bebidas: guest.drinks,
                bebidas_acompanhante: guest.companionDrinks,
                musicas: guest.songs
            }
        ]);

    if (error) {

        console.error(
            "ERRO AO GUARDAR:",
            error
        );

        alert(
            "Ocorreu um erro ao guardar a resposta."
        );

        return;
    }

    console.log(
        "Resposta gravada com sucesso:",
        data
    );
}
