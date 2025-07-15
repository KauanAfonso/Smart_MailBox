#include <WiFi.h>
#include <HTTPClient.h>

// Config WiFi
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// Link da API no Render
const char* server = "https://smartmailbox-production.up.railway.app/api/letters";

// Pinos
int led = 13;
int PIR_SENSOR = 15;
int pir_state = LOW;
int value_pir = 0;

void setup() {
  Serial.begin(115200);
  pinMode(led, OUTPUT);
  pinMode(PIR_SENSOR, INPUT);

  WiFi.begin(ssid, password);
  Serial.println("Conectando ao WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi conectado!");
}

void loop() {
  value_pir = digitalRead(PIR_SENSOR);

  if (value_pir == HIGH && pir_state == LOW) {
    digitalWrite(led, HIGH);
    pir_state = HIGH;
    Serial.println("Movimento detectado! Enviando POST...");

    if (WiFi.status() == WL_CONNECTED) {
      HTTPClient http;
      http.begin(server);
      http.addHeader("Content-Type", "application/json");
      int httpCode = http.POST("{\"status\":\"Pendente\"}");
      Serial.print("Código HTTP: ");
      Serial.println(httpCode);
      http.end();
    } else {
      Serial.println("Falha na conexão WiFi!");
    }
  } else if (value_pir == LOW && pir_state == HIGH) {
    digitalWrite(led, LOW);
    pir_state = LOW;
  }

  delay(500);
}
