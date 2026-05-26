import Image from "next/image";

export default function HomePage() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#000814 0%, #001d4d 100%)",
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* CONTAINER */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "50px 30px",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "60px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={90}
          />

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "60px",
                fontWeight: 900,
                lineHeight: 1,
              }}
            >
              DIOW
            </h1>

            <p
              style={{
                margin: 0,
                color: "#0066FF",
                fontSize: "34px",
                fontWeight: 700,
                letterSpacing: "6px",
              }}
            >
              PLAY
            </p>
          </div>
        </div>

        {/* HERO */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* TEXTO */}
          <div>
            <h2
              style={{
                fontSize: "72px",
                fontWeight: 900,
                lineHeight: 1,
                margin: 0,
              }}
            >
              Ganhe dinheiro revendendo
            </h2>

            <h3
              style={{
                fontSize: "80px",
                fontWeight: 900,
                color: "#0066FF",
                marginTop: "15px",
                marginBottom: "30px",
              }}
            >
              Diow Play 🚀
            </h3>

            <p
              style={{
                fontSize: "34px",
                color: "#ddd",
                lineHeight: 1.4,
                marginBottom: "50px",
              }}
            >
              Comece sua revenda hoje e tenha{" "}
              <span
                style={{
                  color: "#0066FF",
                  fontWeight: 700,
                }}
              >
                lucros recorrentes.
              </span>
            </p>

            {/* BOTÕES */}
            <div
              style={{
                display: "flex",
                gap: "25px",
                flexWrap: "wrap",
              }}
            >
              {/* BOTAO 1 */}
              <a
                href="https://diowplay.sigma.st/#/rs/K4Wrwq91eN/rlKWO3Wzo7"
                target="_blank"
                style={{
                  flex: 1,
                  minWidth: "320px",
                  background:
                    "linear-gradient(90deg,#003cff,#0066FF)",
                  borderRadius: "25px",
                  padding: "28px",
                  textDecoration: "none",
                  color: "white",
                  boxShadow:
                    "0 0 30px rgba(0,102,255,0.45)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "32px",
                        fontWeight: 900,
                      }}
                    >
                      QUERO REVENDER
                    </h4>

                    <p
                      style={{
                        marginTop: "10px",
                        color: "#ddd",
                        fontSize: "18px",
                      }}
                    >
                      Começar agora
                    </p>
                  </div>

                  <span
                    style={{
                      fontSize: "42px",
                    }}
                  >
                    →
                  </span>
                </div>
              </a>

              {/* BOTAO 2 */}
              <a
                href="https://wa.me/5547992027636?text=Olá vim do site quero mais informações sobre revenda diow play"
                target="_blank"
                style={{
                  flex: 1,
                  minWidth: "320px",
                  background:
                    "linear-gradient(90deg,#00aa44,#00cc66)",
                  borderRadius: "25px",
                  padding: "28px",
                  textDecoration: "none",
                  color: "white",
                  boxShadow:
                    "0 0 30px rgba(0,255,120,0.35)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "32px",
                        fontWeight: 900,
                      }}
                    >
                      MAIS INFORMAÇÕES
                    </h4>

                    <p
                      style={{
                        marginTop: "10px",
                        color: "#eee",
                        fontSize: "18px",
                      }}
                    >
                      Falar no WhatsApp
                    </p>
                  </div>

                  <span
                    style={{
                      fontSize: "42px",
                    }}
                  >
                    →
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* IMAGEM */}
          <div>
            <Image
              src="/revenda-banner.png"
              alt="Banner"
              width={900}
              height={900}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* BENEFÍCIOS */}
        <section
          style={{
            width: "100%",
            padding: "80px 0 100px",
          }}
        >
          {/* Texto topo */}
          <div
            style={{
              marginBottom: "50px",
            }}
          >
            <p
              style={{
                fontSize: "42px",
                color: "#fff",
                lineHeight: 1.4,
                maxWidth: "900px",
                fontWeight: 500,
              }}
            >
              Com a revenda Diow Play você ganha
              dinheiro indicando e ativando assinaturas.
              É rápido, fácil e{" "}
              <span
                style={{
                  color: "#0066FF",
                  fontWeight: 700,
                }}
              >
                100% online!
              </span>
            </p>
          </div>

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                icon: "💰",
                title: "LUCRO ALTO",
                desc: "Ganhos recorrentes e ótima margem de lucro.",
              },
              {
                icon: "🎧",
                title: "SUPORTE COMPLETO",
                desc: "Equipe pronta para te ajudar sempre.",
              },
              {
                icon: "🖥️",
                title: "PAINEL FÁCIL",
                desc: "Sistema intuitivo para gerenciar tudo.",
              },
              {
                icon: "🚀",
                title: "ATIVAÇÃO RÁPIDA",
                desc: "Ative clientes em poucos segundos.",
              },
              {
                icon: "👥",
                title: "MATERIAL DE DIVULGAÇÃO",
                desc: "Artes e conteúdos prontos para vender mais.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(0,0,0,0.45)",
                  border:
                    "1px solid rgba(0,102,255,0.45)",
                  borderRadius: "30px",
                  padding: "40px 30px",
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                  boxShadow:
                    "0 0 25px rgba(0,102,255,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "70px",
                    marginBottom: "25px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "34px",
                    fontWeight: 900,
                    marginBottom: "20px",
                    color: "#fff",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "24px",
                    color: "#ddd",
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "60px",
              textAlign: "center",
            }}
          >
            <a
              href="https://diowplay.sigma.st/#/rs/K4Wrwq91eN/rlKWO3Wzo7"
              target="_blank"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "20px",
                background:
                  "linear-gradient(90deg,#003cff,#0066FF)",
                color: "#fff",
                textDecoration: "none",
                padding: "28px 50px",
                borderRadius: "28px",
                fontSize: "34px",
                fontWeight: 900,
                boxShadow:
                  "0 0 40px rgba(0,102,255,0.45)",
              }}
            >
              🚀 COMECE AGORA E MUDE SEUS RESULTADOS!
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}