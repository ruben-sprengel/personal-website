<script lang="ts">
	import { env } from '$env/dynamic/public';
</script>

<svelte:head>
    <title>Ruben Sprengel | Impressum</title>
    <meta name="robots" content="noindex">
</svelte:head>

<section class="mx-auto min-h-screen w-full max-w-4xl px-4 py-16">
	<h1 class="mb-8 text-4xl font-bold">Impressum</h1>

	<p class="text-lg">{env.PUBLIC_OWNER_NAME}</p>

	<h2 id="m56" class="mt-8 mb-4 text-2xl font-semibold">Kontakt</h2>
	<div class="space-y-1 text-lg text-gray-700 dark:text-gray-300">
		<p>
			E-Mail: <a href="mailto:{env.PUBLIC_OWNER_EMAIL}" class="text-primary hover:underline"
				>{env.PUBLIC_OWNER_EMAIL}</a
			><br />
			Telefon: auf Anfrage
		</p>
	</div>

	<h2 id="m56" class="mt-8 mb-4 text-2xl font-semibold">Redaktionell verantwortlich</h2>
	<div class="space-y-1 text-lg text-gray-700 dark:text-gray-300">
		<p>{env.PUBLIC_OWNER_NAME} (Kontakt s.o.)</p>
	</div>

	<h2 id="m174" class="mt-8 mb-4 text-2xl font-semibold">Verbraucherstreitbeilegung</h2>
	<p class="text-lg text-gray-700 dark:text-gray-300">
		Wir sind nicht bereit und nicht verpflichtet an einem Streitbeilegungsverfahren vor einer
		Verbraucherstreitschlichtungsstelle teilzunehmen.
	</p>

	<h2 id="m65" class="mt-8 mb-4 text-2xl font-semibold">Haftungs- und Schutzrechtshinweise</h2>
	<div class="space-y-4 text-lg text-gray-700 dark:text-gray-300">
		<p>
			<strong>Haftungsausschluss:</strong> Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach
			unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und entfalten keine
			rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende Informationen (z.&nbsp;B.
			das Impressum, die Datenschutzerklärung, AGB oder verpflichtende Belehrungen von Verbrauchern)
			handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu ändern oder zu löschen,
			soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und unverbindlich.
		</p>
		<p>
			<strong>Links auf fremde Webseiten:</strong> Die Inhalte fremder Webseiten, auf die wir direkt
			oder indirekt verweisen, liegen außerhalb unseres Verantwortungsbereiches und wir machen sie uns
			nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in den verlinkten Webseiten
			aufrufbaren Informationen entstehen, übernehmen wir keine Verantwortung.
		</p>
		<p>
			<strong>Urheberrechte und Markenrechte:</strong> Alle auf dieser Website dargestellten Inhalte,
			wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die jeweiligen Schutzrechte
			(Urheberrechte, Markenrechte) geschützt. Die Verwendung, Vervielfältigung usw. unterliegen unseren
			Rechten oder den Rechten der jeweiligen Urheber bzw. Rechteinhaber.
		</p>
		<p>
			<strong>Hinweise auf Rechtsverstöße:</strong> Sollten Sie innerhalb unseres Internetauftritts Rechtsverstöße
			bemerken, bitten wir Sie uns auf diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links
			nach Kenntnisnahme unverzüglich entfernen.
		</p>
	</div>

	<h2 id="m169" class="mt-8 mb-4 text-2xl font-semibold">Bildnachweise</h2>
	<div class="space-y-1 text-lg text-gray-700 dark:text-gray-300">
		<p>Bildquellen und Urheberrechtshinweise:</p>
		<p>Bild RS Initialien: KI Generiert mit MS Copilot</p>
		<p>
			Lucide Icons: <a
				href="https://lucide.dev/license"
				target="_blank"
				class="text-primary hover:underline">https://lucide.dev/license</a
			>
		</p>
	</div>

	<p class="seal mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
		Quelle: <a
			href="https://www.e-recht24.de/impressum-generator.html"
			target="_blank"
			rel="noopener noreferrer nofollow"
			class="hover:underline">https://www.e-recht24.de/impressum-generator.html</a
		>
	</p>
</section>
