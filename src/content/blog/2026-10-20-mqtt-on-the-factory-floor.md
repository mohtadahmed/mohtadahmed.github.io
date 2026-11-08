---
title: MQTT on the factory floor — notes from building real-time SCADA dashboards
date: 2026-10-20
category: Article
tags: [iot, mqtt, scada, django]
cover: /images/placeholders/blog-2.svg
excerpt: A template article showing how code, tables and diagrams render. Replace it with your own write-up.
sample: true
---

> **Sample post.** This shows how articles look — headings, code, tables and quotes. Replace with your own content.

## The problem

Factory machines produce a constant stream of small messages. The dashboard needs them **now**, not in five minutes.

## A minimal subscriber

```python
import paho.mqtt.client as mqtt

def on_message(client, userdata, msg):
    print(msg.topic, msg.payload.decode())

client = mqtt.Client()
client.on_message = on_message
client.connect("broker.local", 1883)
client.subscribe("factory/+/line/+/status")
client.loop_forever()
```

## Things to think about

| Concern        | Approach                         |
| -------------- | -------------------------------- |
| Message volume | Topic hierarchy + QoS choices    |
| Access control | RBAC at the API and dashboard    |
| Reliability    | Retained messages, reconnection  |

## Closing thought

Software for physical systems has to respect physics: networks drop, sensors drift, and people on the floor need answers quickly.
