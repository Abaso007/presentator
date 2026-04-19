package migrations

import (
	"errors"

	"github.com/pocketbase/pocketbase/core"
	m "github.com/pocketbase/pocketbase/migrations"
)

func init() {
	m.Register(func(app core.App) error {
		err := updateScreensPresentable(app)
		if err != nil {
			return err
		}

		err = updateUsersPresentable(app)
		if err != nil {
			return err
		}

		// set default accent color
		settings := app.Settings()
		settings.Meta.AccentColor = "#4b48e1"

		return app.Save(settings)
	}, nil)
}

func updateScreensPresentable(app core.App) error {
	screensCollection, err := app.FindCollectionByNameOrId("screens")
	if err != nil {
		return err
	}

	title, ok := screensCollection.Fields.GetByName("title").(*core.TextField)
	if !ok {
		return errors.New("missing title field")
	}
	title.Presentable = true

	return app.Save(screensCollection)
}

func updateUsersPresentable(app core.App) error {
	usersCollection, err := app.FindCollectionByNameOrId("users")
	if err != nil {
		return err
	}

	email, ok := usersCollection.Fields.GetByName("email").(*core.EmailField)
	if !ok {
		return errors.New("missing email field")
	}
	email.Presentable = true

	return app.Save(usersCollection)
}
